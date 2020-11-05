import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {Card} from 'native-base';
const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;
const Articles = ({navigation, data}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ids.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <View style={{height: HEIGHT + 20, width}}>
              <Card
                style={{
                  backgroundColor: '#212120',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: HEIGHT,
                  borderRadius: 8,
                }}>
                <View
                  style={{padding: spacing, paddingRight: 50, paddingLeft: 34}}>
                  <View style={{width: HEIGHT * 1.8}}>
                    <Text style={{color: 'white'}}>{item.category}</Text>
                    <Text
                      style={{
                        color: '#707371',
                        fontWeight: 'bold',
                        top: 10,
                        fontFamily: 'SansitaSwashed-Light',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{top: spacing * 3}}>
                    <Text style={{color: 'grey'}}>{item.author}</Text>
                    <Text style={{color: 'grey', fontSize: 10}}>
                      {item.date}
                    </Text>
                  </View>
                </View>
                <View style={{alignItems: 'center', top: 30, left: -20}}>
                  <Image
                    source={require('../../assets/perahukertas.jpg')}
                    style={{height: 100, width: 60, borderRadius: 6}}
                  />
                </View>
              </Card>
            </View>
          );
        }}
      />
      <Text>hekki</Text>
    </SafeAreaView>
  );
};
export default Articles;
