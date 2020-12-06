import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  globalStyle,
  black,
  width,
  height,
  spacing,
  TOP,
} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Challange = ({navigation}) => {
  const data = [
    {
      id: 1,
      topic: 'Matematika',
      level: '1-12',
    },
    {
      id: 2,
      topic: 'Science',
      level: '1-12',
    },
    {
      id: 3,
      topic: 'Umum',
      level: '1-12',
    },
    {id: 1, topic: 'Teknologi', level: '1-12'},
  ];
  return (
    <SafeAreaView style={globalStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 2 * spacing,
          top:10
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[globalStyle.backIconContainer, {top: -spacing + 15}]}>
          <MaterialCommunity name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={[globalStyle.titleWrite, {justifyContent: 'center'}]}>
            Pilih Tantangan
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          flexDirection: 'row',
          height: height,
          flexWrap: 'wrap',
          top: -TOP,
          // paddingHorizontal: 10,
        }}>
        {data.map((_, index) => {
          return (
            <View
              key={index}
              style={{
                // width: width / 4,

                // backgroundColor: 'red',

                flexWrap: 'wrap',
                paddingHorizontal: 20,
                alignItems: 'center',
                alignContent: 'center',
                paddingTop: 30,
                //
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  top: height / 4,
                  width: height / 4,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,

                  height: 60,
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                  <TouchableOpacity onPress={()=>navigation.navigate('Compete',{topic:_.topic})}>
                <Text
                  style={[globalStyle.titleTextName, {textAlign: 'center'}]}>
                  {_.topic}
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Challange;
