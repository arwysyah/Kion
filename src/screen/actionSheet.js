import React,{useState} from 'react'
import {View,Text,TextInput,ActivityIndicator,TouchableOpacity,Image,Platform} from 'react-native'
import { globalStyle, width, height } from '../components/styles';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import fireDB from '../../config/configs';
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const Fetch = RNFetchBlob.polyfill.Fetch;
// replace built-in fetch
 window.fetch = new Fetch({
  // enable this option so that the response data conversion handled automatically
  auto: true,
  // when receiving response data, the module will match its Content-Type header
  // with strings in this array. If it contains any one of string in this array,
  // the response body will be considered as binary data and the data will be stored
  // in file system instead of in memory.
  // By default, it only store response data to file system when Content-Type
  // contains string `application/octet`.
  binaryContentTypes: ['image/', 'video/', 'audio/', 'foo/'],
}).build();
const ActionSheet = ({status}) => {
  const [loading,setLoading]= useState(false)
  const [photo,setPhoto]= useState(null)
  const [urlPhoto,setUrlPhoto]=useState('')
  function handleChoosePhoto (){
    const options = {
      noData: true,
      maxHeight: 500,
      maxWidth: 500,
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log(response)
      if (response.uri) {
        setPhoto(response.uri)
          //  console.log(response.uri)
          
        }
        // console.log(photo)
      
    });
  };

  function formatUpload  (uri, mime = 'image/jpeg', name){
    return new Promise((resolve, reject) => {
      let imgUri = uri;
      let uploadBlob = null;
      const uploadUri =
        Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
      const {currentUser} = '12323123123123'
      const imageName = `${name}${Date.now()}.jpg`;
      const imageRef = fireDB
        .storage()
        .ref(`/images/${currentUser}/car`)
        .child(imageName);
      fs.readFile(uploadUri, 'base64')
        .then(data => {
          return Blob.build(data, {type: `${mime};BASE64`});
        })
        .then(blob => {
          uploadBlob = blob;
          return imageRef.put(blob, {contentType: mime, name: name});
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then(url => {
          resolve(url);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  async function uploadImage () {
    const mime = 'image/jpeg';
    
    const name = 'photo';
    await formatUpload(photo, mime, name).then(url => {
     setUrlPhoto(url)
    });

    console.log(photo,'ss')
  };
  return (
    <View style={globalStyle.container}>
        <View style={{left:20,right:20,top:40}}>
              <Text style={globalStyle.inputTitle}> Masukkan source (sumber) jika ada </Text>
              <TextInput
                style={globalStyle.input}
                secureTextEntry
                autoCapitalize='none'
                // onChangeText={this.handleChange('password')}
                // value={this.state.password}
              >
              </TextInput>
              <Text style={globalStyle.inputTitle}> Tags </Text>
              <TextInput
                style={globalStyle.input}
                secureTextEntry
                autoCapitalize='none'
                // onChangeText={this.handleChange('password')}
                // value={this.state.password}
              >
              </TextInput>
              <Text style={globalStyle.inputTitle}> Foto Cover </Text>
              {photo == null ? (
              <TouchableOpacity onPress={handleChoosePhoto}>
                <View style={globalStyle.add}>
                  <Image source={require('../../assets/logoButton.png')}
                  style={{height:60,width:100,top:40}} />
                  <Text style={{color: 'grey'}}>Photo</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handleChoosePhoto}
                style={{width: width/3, height: height/3}}>
                <Image source={{uri: photo}} style={{flex: 1}} />
              </TouchableOpacity>
            )}
              
            </View>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={uploadImage}
              disabled={loading === true ? true : false}>
              <View style={globalStyle.saveButton}>
                {loading === true ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                    }}>
                    Submit
                  </Text>
                )}
              </View>
            </TouchableOpacity>
        
    </View>
  );
};

export default ActionSheet