import React from 'react'
import {View,Text} from 'react-native'
import {globalStyle } from '../components/styles'

export default function Notification({}){
return(
    <View style={globalStyle.container}>
        <Text style={{color:"black"}}>
            Notif
        </Text>
    </View>
)
}