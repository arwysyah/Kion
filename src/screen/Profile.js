import React, {useState} from 'react';
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
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.titleTextName}>Kenzo Ymc</Text>
        <TouchableOpacity>
          <MaterialCommunity
            name="fountain-pen"
            size={25}
            color="white"
            style={{paddingRight: spacing * 2, top: spacing}}
          />
          <Text style={{color:"white",top:9}}> edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <View>
          <Image
            source={require('../../assets/maudy.jpg')}
            style={styles.profilImage}
          />
        </View>
        <View>
          <ProfileText
            data={['Postingan', 'Pengikut ', 'Mengikuti']}
            textStyles={styles.text}
            
          />
          <ProfileText
            data={[88,77,66]}
            textStyles={styles.texts}
          />
        </View>
       
      </View>
      <ScrollView>
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
  titleTextName: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    // top: spacing,
    padding: spacing,
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
  text: {
    fontSize: 15,
    color: 'white',
    paddingLeft: spacing+10,
    top: spacing * 2.5,
    // justifyContent:'c'
  },
   texts: {
    fontSize: 15,
    color: 'white',
    paddingHorizontal:spacing*3,
    left:10,
    top: spacing * 2.5,
    textAlign:'center',
    justifyContent:'center'
  },
});
