import React, {memo} from 'react';
import {View, Text, Image, FlatList, Animated, StyleSheet} from 'react-native';
import topics from '../components/data/topicData';
import { globalStyle } from '../components/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Topic = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <View
              style={styles.cardContainer}>
                  <TouchableOpacity onPress={()=>navigation.navigate(item.nav)}>
              <View
                style={styles.card}>
                <Text style={globalStyle.textUsual}>
                  {item.about}
                </Text>
              </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles=StyleSheet.create({
    card:{
        backgroundColor: '#FFFFFF',
        width: 150,
        justifyContent: 'center',
        height: 70,
        borderRadius:6
      },cardContainer:{
        height: 100,
        shadowColor: 'black',
        // backgroundColor: 'red',
        paddingLeft: 20,
        alignItems: 'center',
      }
})
export default memo(Topic);
