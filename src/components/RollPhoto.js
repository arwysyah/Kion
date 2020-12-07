import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {globalStyle, width, height} from './styles';
import data from '../components/data/data';

const RollPhoto = ({navigation}) => {
  return (

     
      <ScrollView style={{flex:1}}>
        <View style={styles.galleryImage}>
          {data.map((item, index) => {
            return (
              <View key={index} style={{borderColor:'black'}}
              > 
                <Image
               
                  style={{width: width / 3, height: width / 3,borderColor:'black',borderWidth:1}}
                  source={item.image}
                  resizeMode='contain'
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
   

  );
};
const styles = StyleSheet.create({
  galleryImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
export default RollPhoto;
