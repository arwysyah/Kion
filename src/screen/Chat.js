import React from 'react'
import {View,Text,Dimensions} from 'react-native'
const deviceWidth = Dimensions.get('window').width * (2 / 3);
const TestNavigation =()=>{
    return(
        <View style={{flex:1,backgroundColor:'black'}}>
            <Text>
            Chat 
            </Text>
        </View>
    )
}
export default TestNavigation