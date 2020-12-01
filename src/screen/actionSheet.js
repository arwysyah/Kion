import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Platform,
  ToastAndroid,
} from 'react-native';
import {
  globalStyle,
  width,
  height,
  TOP
} from '../components/styles';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import fireDB from '../../config/configs';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
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
const ActionSheet = ({navigation,route}) => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [urlPhoto, setUrlPhoto] = useState('');
  const [tagsText, setTagsText] = useState('');
  const [userPathName,setName]=useState('')
  const [title,setTitle]=useState('')
  const{text}=route.params
  console.log(text)
  function handleChoosePhoto() {
    const options = {
      noData: true,
      maxHeight: 500,
      maxWidth: 500,
    };
    ImagePicker.showImagePicker(options, (response) => {
      // console.log(response)
      if (response.uri) {
        setPhoto(response.uri);
        //  console.log(response.uri)
      }
      // console.log(photo)
    });
  }

  useEffect(()=>{
getCurrentUser()
  },[])

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
setName(currentUser.user.givenName)
  }
  function formatUpload(uri, mime = 'image/jpeg', name) {
    return new Promise((resolve, reject) => {
      let imgUri = uri;
      let uploadBlob = null;
      const uploadUri =
        Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
      ;
      const imageName = `${name}${Date.now()}.jpg`;
      const imageRef = fireDB
        .storage()
        .ref(`/images/${userPathName}`)
        .child(imageName);
      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, {type: `${mime};BASE64`});
        })
        .then((blob) => {
          uploadBlob = blob;
          return imageRef.put(blob, {contentType: mime, name: name});
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then((url) => {
          resolve(url);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
  async function uploadImage() {
    const mime = 'image/jpeg';

    const name = 'coverFoto';
if(photo){
  try {
    await formatUpload(photo, mime, name).then((url) => {
      setUrlPhoto(url);
    ToastAndroid.show('Bethasil mengupload artikel',ToastAndroid.SHORT)
    }).then(()=>navigation.goBack())
  } catch (error) {
    console.log(error);
  }
}else{
  ToastAndroid.show('Anda harus memasukkan foto cover',ToastAndroid.SHORT)
}
   
  }

  return (
    <View style={globalStyle.container}>
      <View style={{left: 20, right: 20, top: 40}}>
       <Text style={globalStyle.inputTitle}>
         Judul
        </Text>
        <TextInput
          style={globalStyle.input}
          secureTextEntry
         
          onChangeText={(s)=>setTitle(s)}
          value={title}
        ></TextInput>
        <Text style={globalStyle.inputTitle}> Tags </Text>
        <TextInput
          style={globalStyle.input}
          autoCapitalize="none"
          onChangeText={(txt) => setTagsText(txt)}
          value={tagsText}></TextInput>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          top: width / 3,
        }}>
        {photo == null ? (
          <TouchableOpacity onPress={handleChoosePhoto}>
            <View style={globalStyle.add}>
              <Image
                source={require('../../assets/logoButton.png')}
                style={{height: 60, width: 100, alignItems: 'center'}}
              />
            </View>
            <Text style={[globalStyle.titleWrite, {textAlign: 'center',top:TOP}]}>
              Foto Cover
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleChoosePhoto}
            style={{height: height * 0.3, width: width * 0.6}}>
            {/* <View style={globalStyle.add}> */}
            <Image source={{uri: photo}} style={{flex: 1}} resizeMode="cover" />
            {/* </View> */}
            <Text style={[globalStyle.titleWrite, {textAlign: 'center'}]}>
              Foto Cover
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{top: width / 2}}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={uploadImage}
          disabled={loading === true ? true : false}>
          <View style={globalStyle.commonButton}>
            {loading === true ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text
                style={[
                  globalStyle.textUsual,
                  {color: '#FFFFFF', fontWeight: 'bold'},
                ]}>
                Submit
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionSheet;
