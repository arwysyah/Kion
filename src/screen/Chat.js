import React from 'react'
import {View,Text,TouchableOpacity,SafeAreaView} from 'react-native'
import {globalStyle,TOP,spacing} from '../components/styles'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
const Chat =({navigation})=>{
    return(
        <SafeAreaView style={globalStyle.container}>
             <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[globalStyle.backIconContainer, {top: TOP - spacing}]}>
        <MaterialCommunity name="arrow-left" size={25} color="black" />
      </TouchableOpacity>
    <View style={{justifyContent:'center',alignItems:'center'}}>
       <Text> Chat</Text>
    </View>
        </SafeAreaView>
    )
}
export default Chat