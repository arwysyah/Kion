import React, {useRef} from 'react';
import {View, Text, FlatList, Image, Animated} from 'react-native';
import {globalStyle, width, ITEM_HEIGHT, ITEM_WIDTH, height, HEIGHT, spacing} from './styles';
import newData from './data/data';

export default function Parallax({}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={globalStyle.container}>
      <Animated.FlatList
        data={newData}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],{useNativeDriver:true})}
        renderItem={({item, index}) => {
            const inputRange =[
                (index-1)*width,
                index*width,
                (index+1)*width
            ]
            const translateX = scrollX.interpolate({
                inputRange,
                outputRange:[-width*0.7,0,width*0.7]
            })
          return (
            <View
              style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                height: height / 1.5,
              }}>
              <View
                style={{
                  borderRadius: 18,
                  borderWidth: 10,
                  shadowColor: '#000',
                  shadowRadius: 30,
                  shadowOpacity: 1,
                 
                  backgroundColor: 'white',
                  borderColor: '#FFFFFF',
                }}>
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: 'hidden',
                    alignItems: 'center',
                  }}>
                  <Animated.Image
                    source={item.image}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      borderRadius: 14,
                      transform:[
                          {
                              translateX
                          }
                      ]
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <Image
                source={item.image}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  position: 'absolute',
                  bottom: HEIGHT-50,
                  alignItems: 'center',
                  borderWidth: 5,
                  borderColor: '#FFFFFF',
                }}
                resizeMode="cover"
              />
            </View>
          );
        }}
      />
    </View>
  );
}
