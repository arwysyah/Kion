import React, {memo} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {Card} from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyle, black, width, height} from './styles';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;

export default function HorizontalArticle({navigation, data, from, routes}) {
  return (
    <SafeAreaView style={[globalStyle.container,]}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.ids.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        // bounces={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={{height: HEIGHT * 1.62, width: width / 1.2, paddingLeft: 20}}>
              <View style={globalStyle.cardContainerPerCard}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Test',{
                 item:item
                })}>
                <View>
                  <Image
                    source={ item.urlImage === ''? require('../../assets/perahukertas.jpg'):{uri:item.urlImage}}
                    style={{
                      height: HEIGHT * 1.2,
                      width: width / 1.3,
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      backgroundColor: '#45484d',
                      height: 30,
                      top: -(HEIGHT + 20),
                      width: HEIGHT,
                    
                    }}>
                    <Text
                      style={[
                        globalStyle.titleWrite,
                        {color: 'white', textAlign: 'center'},
                      ]}>
                      {item.category}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#45484d',
                      height: 45,
                      top: -(HEIGHT - 80),
                     
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={[
                        globalStyle.textUsual,
                        {color: 'white', textAlign: 'center'},
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{top: -HEIGHT + 80, left: spacing}}>
                    <Text style={{color: 'black'}}>{item.author}</Text>
                    <Text style={{color: 'black', fontSize: 10}}>
                      {new Date (item.createdAt).toString()}
                    </Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>
              </View>
              
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
