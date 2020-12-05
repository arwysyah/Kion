import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  Alert
} from 'react-native';
import {globalStyle,height,width, spacing, arrayColor} from '../components/styles';
import Header from '../components/header'


export default function Upload({navigation}) {
  return (
    <SafeAreaView style={globalStyle.container}>
   
      {/* <StatusBar/> */}
      <Header
      title={'Posting'}
      navigation={navigation}/>
     <View style={{padding:spacing+18,top:spacing*3}}>
       <Image source={require('../../assets/datacentre.jpg')}
       style={{resizeMode:'stretch',width:width/1.2,height:height/2.9}}/>
     </View>
      <View style={{paddingHorizontal: 30,top:height/11,}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Posting')}>
        <View style={[globalStyle.cardPart,{borderWidth:0.9,borderColor:'black'}]}>
          <Text style={globalStyle.titleWrite}>Buat Artikel</Text>
          <Text style={globalStyle.commonText}>
            Tuliskan idemu ataupun cerita mu sehingga orang lain tahu{' '}
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Alert.alert(`we haven't provide this service currently`)} style={{top:15}}>
        <View style={[globalStyle.cardPart,{borderWidth:0.9,borderColor:'black'}]}>
          <Text style={globalStyle.titleWrite}>Buat Pertanyaan</Text>
          <Text style={globalStyle.commonText}>
            Silahkan bertanya kepada orang-orang, sehingga anda mendapatkan
            jawabannya.{' '}
          </Text>
          
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Camera',{from:'Upload'})} style={{top:30}}>
        <View style={[globalStyle.cardPart,{borderWidth:0.7,borderColor:'black'}]}>
          <Text style={globalStyle.titleWrite}>Unggah Foto</Text>
          <Text style={globalStyle.commonText}>
            Unggah foto anda dan jadikan profil anda lebih menarik.
          </Text>
          
        </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
