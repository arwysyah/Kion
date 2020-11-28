import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {globalStyle, spacing} from '../components/styles';
import {WEB_CLIENT_ID} from '../secret/secretKey';
import {useSelector, useDispatch, createSelectorHook} from 'react-redux';
import {getSignedIN} from '../redux/action';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // [Android] specifies an account name on the device that should be used
});

const Login = ({navigation}) => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isSignedIn, setIsSignIn] = React.useState(false);
  const globalState = useSelector((state) => state.isSignedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    // getCurrentUser()
    redirect(userInfo);
    isSignedIns();
  }, []);
  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
          this.setState({
            error,
          });
      }
    }
  }
  async function getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo);
    } catch (error) {
      const errorMessage =
        error.code === statusCodes.SIGN_IN_REQUIRED
          ? 'Please sign in :)'
          : error.message;
      setError(new Error(errorMessage));
    }
  }
  function redirect() {
    if (userInfo !== null) {
    }
  }
  async function isSignedIns() {
    const isSignedIn = await GoogleSignin.isSignedIn();
    await dispatch(getSignedIN(isSignedIn));
    setIsSignIn(isSignedIn)

    if (isSignedIn == true) {
      navigation.replace('SlideNavigation');
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={[globalStyle.logoButton, {top: spacing}]}>
          <Image
            source={require('../../assets/logoButton.png')}
            style={globalStyle.image}
          />
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', top: 20}}>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={signIn}>
            <Text style={{color: '#707070'}}>Login With</Text>
            <Image source={require('../../assets/google.png')} />
          </TouchableOpacity>
          <Text style={{color: '#707070'}}>or</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={require('../../assets/phone.png')} />
          </View>
          <Text style={globalStyle.terms}>
            By signing up you agree to
            <Text style={{color: 'red', justifyContent: 'center'}}>
              {'\n'}
              Terms of services <Text style={{color: 'black'}}>& </Text>
              <Text>Privacy Policy</Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Login;
