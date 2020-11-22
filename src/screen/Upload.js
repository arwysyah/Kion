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
import {globalStyle,height,width, spacing} from '../components/color';
import {Card} from 'native-base';
import Header from '../components/header'


export default function Upload({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar/> */}
      <Header
      title={'Posting'}
      navigation={navigation}/>
     <View style={{padding:spacing+18,top:spacing*3}}>
       <Image source={require('../../assets/datacenter.jpg')}
       style={{resizeMode:'stretch',width:width/1.2,height:height/2.9}}/>
     </View>
      <View style={{paddingHorizontal: 30,top:height/11,}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Posting')}>
        <Card style={globalStyle.cardPart}>
          <Text style={globalStyle.titleWrite}>Buat Artikel</Text>
          <Text style={globalStyle.commonText}>
            Tuliskan idemu ataupun cerita mu sehingga orang lain tahu{' '}
          </Text>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Alert.alert(`we haven't provide this service currently`)}>
        <Card style={globalStyle.cardPart}>
          <Text style={globalStyle.titleWrite}>Buat Pertanyaan</Text>
          <Text style={globalStyle.commonText}>
            Silahkan bertanya kepada orang-orang, sehingga anda mendapatkan
            jawabannya.{' '}
          </Text>
          
        </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
