import React,{memo} from 'react';
import {View, Text, Image, FlatList,Animated} from 'react-native';
import data from './data/data';
const RoundTopAccount = ({translateY}) => {


  return (
  <View>
    
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <View style={{top:20,height:100, shadowColor: 'black',
            shadowColor: 'black',

            shadowOffset: {
              width: 10,
              height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 3.84,
            elevation: 5,

            }}>
              <Image
                source={item.image}
                style={{height: 60, width: 60, borderRadius: 50,marginHorizontal:7,}}
              />
              <Text style={{color:'black',marginHorizontal:14}}>Kenzo</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default memo(RoundTopAccount);
