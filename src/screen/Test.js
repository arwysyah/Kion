import React from 'react'
import {View,Text} from 'react-native'
import { globalStyle, black } from '../components/color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/native'


export default function Test ({navigation,route}){
    const { routes} = route.params
    console.log(routes)
return(
    <View style={globalStyle.container}>
     <TouchableOpacity onPress={()=> navigation.goBack()}>
         <Text>
             Go back
         </Text>
     </TouchableOpacity>
        <Text style={{color:black}}>
            Test
        </Text>
    </View>
)
}