import React from 'react';
import {View, Text,StyleSheet,} from 'react-native';

export default function Profile() {
  return (
<View style={styles.container}>

  <Text style={{color:'white'}}>Profile Page</Text>

</View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1
  }
})
