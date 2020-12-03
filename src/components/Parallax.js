import React, {useRef} from 'react';
import {View, Text, FlatList, Image, Animated} from 'react-native';
import {
  globalStyle,
  width,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  height,
  HEIGHT,
  spacing,
  backgroundColor,
} from './styles';
import newData from './data/data';
import {useSelector} from 'react-redux';

export default function Parallax({}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const populerUser = useSelector((state) => state.allUsers);

  return (
    <View style={globalStyle.container}>
      <Animated.FlatList
        data={populerUser}
        keyExtractor={(item) => item.uid.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                height: height / 1.7,
                backgroundColor:backgroundColor
              }}>
              <View
                style={{
                  borderRadius: 18,
                  borderWidth: 7,
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
                  {item.profilImage === undefined ? (
                    <View >
                    <Text
                      style={{
                        fontSize: 140,
                        color: 'black',
                        position: 'absolute',
                        textAlign: 'center',
                        left:-40,
                        top: 5,
                      }}>
                      {item.fullName.charAt(0)}
                    </Text>
                    </View>
                  ) : (
                    <Animated.Image
                      source={{uri: item.profilImage}}
                      style={{
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                        borderRadius: 14,
                        transform: [
                          {
                            translateX,
                          },
                        ],
                      }}
                      resizeMode="cover"
                    />
                  )}
                </View>
              </View>
              {item.profilImage === undefined ? (
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    position: 'absolute',
                    bottom: HEIGHT - 50,
                    alignItems: 'center',
                    borderWidth: 5,
                    borderColor: '#FFFFFF',
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: 'black',
                      position: 'absolute',
                      textAlign: 'center',
                      left: 15,
                      top: 5,
                    }}>
                    {item.fullName.charAt(0)}
                  </Text>
                </View>
              ) : (
                <Image
                  source={{uri: item.profilImage}}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    position: 'absolute',
                    bottom: HEIGHT - 50,
                    alignItems: 'center',
                    borderWidth: 5,
                    borderColor: '#FFFFFF',
                  }}
                  resizeMode="cover"
                />
              )}
            </View>
          );
        }}
      />
    </View>
  );
}
