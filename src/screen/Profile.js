import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import articleData from '../components/data/articleData';
import Articles from '../components/articles'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileText from '../components/textProfile';
import {globalStyle,iconColor } from '../components/color'
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;

export default function Profile({navigation}) {
  const profileData = useMemo(()=>{
   return ['Postingan', 'Pengikut ', 'Mengikuti']
  },[])
  const data = useMemo(()=>{
    return [88,87,69]
   },[])
  return (
    <View style={globalStyle.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={globalStyle.titleTextName}>Maudy Ayunda</Text>
        <TouchableOpacity>
          <MaterialCommunity
            name="fountain-pen"
            size={25}
            color='#999793'
            style={{paddingRight: spacing * 2, top: spacing}}
          />
          <Text style={{color:"black",top:9}}> edit</Text>
        </TouchableOpacity>
      </View>

     
      <ScrollView>
      <View style={styles.secondContainer}>
        <View>
          <Image
            source={require('../../assets/maudy.jpg')}
            style={styles.profilImage}
          />
        </View>
        <View>
          <ProfileText
            data={profileData}
            textStyles={globalStyle.text}
            
          />
          <ProfileText
            data={data}
            textStyles={globalStyle.texts}
          />
        </View>
       
      </View>
      <Articles data={articleData} navigation={navigation}
      from ={'profile'} />
      </ScrollView>
    

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },

  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: spacing * 1.2,
    left: -10,
    top: -7,
  },
  profilImage: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 8,
  },

});
