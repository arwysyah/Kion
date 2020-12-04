import React, {memo} from 'react';
import {View, Text, Image, FlatList, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import topics from '../components/data/topicData';
import { globalStyle } from '../components/styles';

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
             >
                  <TouchableOpacity onPress={()=>navigation.navigate(item.nav)}
                   style={styles.cardContainer}>
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
        borderRadius:6,
   
        alignItems: 'center',

        zIndex: 999,
    
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
      },cardContainer:{
        height: 100,
       
        // backgroundColor: 'red',
        paddingLeft: 20,
        alignItems: 'center',

      }
})
export default memo(Topic);
