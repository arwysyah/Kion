import React,{memo} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import data from './data/data';
const RoundTopAccount = () => {


  return (
    <View>
      <Text style={{fontSize:16,color:'grey',paddingLeft:12,top:7}}>
        Populer
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        horizontal
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <View style={{top:20,height:100}}>
              <Image
                source={item.image}
                style={{height: 60, width: 60, borderRadius: 50,marginHorizontal:7}}
              />
              <Text style={{color:'white',marginHorizontal:14}}>Kenzo</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default memo(RoundTopAccount);
