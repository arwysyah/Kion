import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';
import {
  globalStyle,
  width,
  height,
  white,
  spacing,
  TOP,
} from '../components/styles';
import RNFetchBlob from 'rn-fetch-blob';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

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

const GalleryPhoto = ({navigation, route}) => {
  const [information, setInformation] = useState('');
  const [urlPhoto, setUrlPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [userPathName, setName] = useState('');
  const {uri} = route.params;
  const limit = 500;

  async function handleUploadGalleryPhoto() {
    if (information > 800) {
      Alert.alert('Maaf anda menulis terlalu banyak');
    } else {
      try {
        await setLoading(true);
        await uploadImage();
        await uploadData();
        await setTimeout(() => {
          setLoading(false);
          ToastAndroid.show(
            'Berhasil mengunggah foto galeri anda',
            ToastAndroid.SHORT,
          );
          navigation.navigate('Upload');
        }, 1500);
      } catch (error) {
        Alert.alert('Maaf, Sepertinya ada masalah dalam pengunggahan');
      }
    }
  }
  async function uploadData(url) {
    const uid = await firebase.auth().currentUser.uid;
    const ref = await firebase.database().ref(`/gallery/${uid}`);
    try {
      ref.push({
        uid,
        image: url,
        information,
        createdAt: new Date().getTime(),
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  function formatUpload(uri, mime = 'image/jpeg', name) {
    return new Promise((resolve, reject) => {
      let imgUri = uri;
      let uploadBlob = null;
      const uploadUri =
        Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
      const imageName = `${name}${Date.now()}.jpg`;
      const imageRef = firebase
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
          setUrlPhoto(url);
          uploadData(url);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
  async function uploadImage() {
    const mime = 'image/jpeg';

    const name = 'galleryPhoto';
    if (uri) {
      try {
        await formatUpload(uri, mime, name).then((url) => {
          setUrlPhoto(url);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      ToastAndroid.show('Anda harus memasukkan foto cover', ToastAndroid.SHORT);
    }
  }
  function countLimit() {
    let result = limit - information.length;
    if (result < 10) {
      return (
        <Text style={{right: 0, left: width / 3, color: 'red'}}>{result}</Text>
      );
    } else {
      return <Text style={{right: 0, left: width / 3}}>{result}</Text>;
    }
  }
  return (
    <SafeAreaView style={globalStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 2 * spacing,
          top: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[globalStyle.backIconContainer, {top: -spacing + 15}]}>
          <MaterialCommunity name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={[globalStyle.titleWrite, {justifyContent: 'center'}]}>
            Unggah Galeri Foto
          </Text>
        </View>
      </View>
      <View>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View
            style={{
              top: 30,
              left: 10,
              alignItems: 'center',
              height: height / 5,
              width,
            }}>
            <Image
              style={{
                height: height / 4,
                width: width / 2.5,
                flex: 1,
                borderRadius: 10,
              }}
              source={{uri}}
              resizeMode="cover"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', top: TOP}}>
        <TextInput
          style={{
            height: height / 5,
            backgroundColor: white,
            top: 30,
            width: width * 0.9,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: 'grey',
          }}
          textAlignVertical="top"
          onChangeText={(info) => setInformation(info)}
          multiline={true}
          value={information}></TextInput>
        <View style={{top: 40}}>
          <Text style={{left: width / 3}}>{countLimit()}</Text>
        </View>
      </View>

      <View style={{height: 50}} />
      <TouchableOpacity
        style={[globalStyle.commonButton, {borderRadius: 10}]}
        // disabled={loading===true}
        onPress={handleUploadGalleryPhoto}>
        {loading === true ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Text style={globalStyle.textButton}>Posting</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default GalleryPhoto;
