import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default function Modal (){
return(
<View style={styles.container}>
<View style={{backgroundColor:'red'}}></View>

  <Text>Modal</Text>


</View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
  flex:1
  }
})
