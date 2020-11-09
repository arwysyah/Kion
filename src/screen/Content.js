import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

export default function Content (){
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Text>Content</Text>
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
    
