import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  globalStyleheet,
  TextInput,
  Keyboard,
  ActivityIndicator,
  ToastAndroid,
  Alert,
  ImageBackground,
} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle, TOP, spacing, white} from '../components/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import firebase from 'firebase';
const Password = ({navigation, route}) => {
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {userInfo} = route.params;
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log('onAuthStateChanged: ', user);

      if (user) {
        navigation.replace('SlideNavigation');
      }
    });
  }, []);

  async function insertData(userInfo) {
    const {givenName, email, photo, name} = userInfo;
    const uid = await firebase.auth().currentUser.uid;
    const emails = await firebase.auth().currentUser.email;
    const ref = await firebase.database().ref(`/users/${uid}`);

 try {
      ref
        .set({
          uid,
          username: givenName,
          email,
          emails,
          fullName: name,
          profilImage: photo,
          follower: 0,
          following: 0,
          verified: 'no',
          accountType: 'VIP',
          cretedAt: new Date().getTime(),
          about:''
        })
       
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleNext() {
    const {email} = userInfo;
    if (password.length < 7) {
      Alert.alert('Anda memasukkan password kurang dari 7 karakter');
    } else {
      await setLoading(true)
     await  firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => insertData(userInfo))
        .then(async() => {
         await setLoading(false)
         await ToastAndroid.show(
            'Akun Anda berhasil didaftarkan',
            ToastAndroid.SHORT,
          );
        navigation.navigate('SlideNavigation')
        })

        .catch((error) => {
          alert(error.message);
        });
    }
  }
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={globalStyle.content}>
        {/* <Toast visible={this.state.visible} message={errorMessage} /> */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            globalStyle.backIconContainer,
            {left: -(spacing * 0.8), top: 5},
          ]}>
          <MaterialCommunity name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <View style={{top: TOP}}>
          <ImageBackground
            source={require('../../assets/phoneLogin.png')}
            style={globalStyle.image}>
            <View
              style={{
                top: TOP * 2,
                left: 65,
                // backgroundColor: 'red',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'red',
                  borderRadius: 30,
                }}
                source={require('../../assets/logoButton.png')}
              />
              <Text style={{fontSize: 10, fontWeight: 'bold'}}>Login</Text>
            </View>
          </ImageBackground>
          <Text style={globalStyle.title}>
            Enter your password to create account
          </Text>
        </View>

        <Text style={[globalStyle.titlePhone, {marginBottom: 0}]}>
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          style={[
            globalStyle.textInputFull,
            {borderBottomWidth: 1.2, borderBottomColor: 'grey'},
          ]}
          placeholder="Password"
          password={password}
          onChangeText={(pswd) => setPassword(pswd)}
        />
      </View>

      {/* <TouchableOpacity> */}
      <TouchableOpacity style={[globalStyle.commonButton]} onPress={handleNext}>
        <Text style={{color: white, fontWeight: 'bold', fontSize: 18}}>
          Next
        </Text>
      </TouchableOpacity>
      {loading==true&&
      <View style={{top:20}}>
        <ActivityIndicator
        size='large'
        color='red'/>
      </View>
      }
    </SafeAreaView>
  );
};

export default Password;
