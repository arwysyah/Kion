import React from 'react'
import {View,Text,Dimensions} from 'react-native'
import {globalStyle } from '../components/styles'
const deviceWidth = Dimensions.get('window').width * (2 / 3);
const TestNavigation =()=>{
    return(
        <View style={globalStyle.container}>
            <Text style={{color:'black'}}>
            Chat 
            </Text>
        </View>
    )
}
export default TestNavigation