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
const PhoneLogin = ({navigation, route}) => {
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigation.replace('SlideNavigation');
      }
    });
  }, []);

  async function handleNext() {
    if(email.length<1  ){
      alert('Tolong Masukkan email anda')
    }else if(password.length<1){
      alert("Tolong Masukkan Password anda")
    }else{

   
    await setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        await setLoading(false);
        ToastAndroid.show('Berhasil Login', ToastAndroid.SHORT);

        await navigation.navigate('SlideNavigation');
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
    }
  }

  function forgoPassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert('Please check your email...');
      })
      .catch(function (e) {
        console.log(e);
      });
  }
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={globalStyle.content}>
        {/* <Toast visible={this.state.visible} message={errorMessage} /> */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          disabled={loading===true}
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
            Enter your email and password to login
          </Text>
        </View>

        <Text style={[globalStyle.titlePhone, {marginBottom: 0}]}>Email</Text>
        <TextInput
          keyboardType="email-address"
          style={[
            globalStyle.textInputFull,
            {borderBottomWidth: 1.2, borderBottomColor: 'grey'},
          ]}
          placeholder="Email"
          password={password}
          onChangeText={(eml) => setEmail(eml)}
        />
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

      <TouchableOpacity style={[globalStyle.commonButton]} onPress={handleNext}>
        {loading === true ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Text
            style={[
              globalStyle.textUsual,
              {color: '#FFFFFF', fontWeight: 'bold'},
            ]}>
          Login
          </Text>
        )}
      </TouchableOpacity>
      <View style={{left: 20, top: TOP * 4}}>
        <TouchableOpacity onPress={forgoPassword} disabled={loading}>
          <Text style={{color: 'blue'}}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PhoneLogin;
