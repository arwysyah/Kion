import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default function Upload (){
return(
<View style={styles.container}>
   <TouchableOpacity onPress={()=>navigation.goBack()}>
  <Text>Upload</Text>
  </TouchableOpacity>
</View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1
  }
})
