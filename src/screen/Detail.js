import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

export default function Detail ({navigation}){
  return(
<View>
   <TouchableOpacity onPress={()=>navigation.goBack()}>
  <Text>HEllo world</Text>
  </TouchableOpacity>
</View>
  )
}