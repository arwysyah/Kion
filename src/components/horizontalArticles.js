import React, {memo} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {Card} from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyle, black, width, height} from './styles';
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;

export default function HorizontalArticle({navigation, data, from, routes}) {
  return (
    <SafeAreaView style={globalStyle.container}>
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
              <Card style={globalStyle.cardContainerPerCard}>
                <View>
                  <Image
                    source={require('../../assets/perahukertas.jpg')}
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
                      top: -(HEIGHT + 30),
                      width: HEIGHT,
                      borderTopLeftRadius: 10,
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
                      borderTopLeftRadius: 10,
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
                      {item.date}
                    </Text>
                  </View>
                </View>
              </Card>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
