import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

export default function History (){
    return(
        <View style={styles.container}>
      
       <Text style={{color:'white'}}> History</Text>
       </View>

       )
     }
     const styles = StyleSheet.create({
       container:{
         backgroundColor:'black',
         flex:1
       }
     })
    
