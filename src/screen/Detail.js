import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

export default function Detail({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color:'white'}}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});