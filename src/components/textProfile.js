import React,{memo, useMemo} from 'react';
import {View, Text} from 'react-native';
 function ProfileText({data, textStyles}) {
const useData = useMemo(()=>data,[])
console.log('sss')
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
      {useData.map((data, index) => (
        <Text
        key ={index} style={textStyles}>{data}</Text>
      ))}
    </View>
  );
}
export default memo(ProfileText)