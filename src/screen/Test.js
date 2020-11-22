import React from 'react'
import {View,Text} from 'react-native'
import { globalStyle, black } from '../components/color'

export default function Test ({}){
return(
    <View style={globalStyle.container}>
        <Text style={{color:black}}>
            Test
        </Text>
    </View>
)
}