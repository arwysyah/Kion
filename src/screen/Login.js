import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import { globalStyle, spacing } from '../components/styles';


const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1,justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <View style={[globalStyle.logoButton,{top:spacing}]}>
      <Image source={require('../../assets/logoButton.png')} style={globalStyle.image}/>
      </View>
  
      </View>
      <View style={{flex: 1,alignItems:'center'}}>
          <View style={{justifyContent:"center",alignItems:"center",top:20}}>
              <Text style={{color:'#707070'}}>Login With</Text>
              <Image source={require('../../assets/google.png')}/>
              <Text style={{color:'#707070'}}>or</Text>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
               
                
                  <Image source={require('../../assets/phone.png')}/>
              </View>
              <Text style={globalStyle.terms}>
                  By signing up you agree to
                  <Text style={{color:'red',justifyContent:"center"}}>
                  {"\n"}
                      Terms of services <Text style={{color:"black"}}>& </Text>
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
