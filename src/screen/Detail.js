import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {globalStyle } from '../components/color'
export default function Detail({navigation}) {
  return (
    <View style={globalStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color:'black'}}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({

});