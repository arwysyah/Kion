import React from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {globalStyle, width, height} from './styles';
import FastImage from 'react-native-fast-image'

const Gallery = ({navigation,route,gallery}) => {
  const data = [1, 2, 3, 4, 5];
  console.log(gallery,'ss')
  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView>
        {gallery.map((item, id) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}
              key={id}>
              <FastImage
              style={{
                height: height / 3,
                width: width - 20,
                paddingHorizontal: 20,
              }}
              source={{
                uri: item.image,
                headers: {Authorization: 'StRSUJDJASDIouwebqmwbj'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Gallery;
