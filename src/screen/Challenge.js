import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { globalStyle, black } from '../components/color'

export default function Challange (){
    return(
        <View style={globalStyle.container}>
      
       <Text style={{color:black}}> Challange</Text>
       </View>

       )
     }
     const styles = StyleSheet.create({
       container:{
         backgroundColor:'black',
         flex:1
       }
     })
    
