import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {
  globalStyle,
  TOP,
  spacing,
  width,
  ITEM_WIDTH,
  ITEM_HEIGHT,
} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
moment.locale('en');
const Detail = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <ScrollView style={globalStyle.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[globalStyle.backIconContainer, {top: TOP - spacing}]}>
          <MaterialCommunity name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{height: 50}} />
      <View style={{paddingHorizontal: 20}}>
        <Text style={[globalStyle.titleWrite, {textAlign: 'center'}]}>
          {item.title}
        </Text>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: width * 0.7,
          }}>
          <Text style={globalStyle.smallText}>{item.username} ©</Text>
          <Text style={globalStyle.smallText}>
            {moment(item.createdAt).format('LL')} •
          </Text>
          <Text style={globalStyle.smallText}>Like</Text>
        </View>
        <View style={{height: 10}} />
        <View style={{alignSelf: 'center'}}>
          <Image
            style={{width: ITEM_WIDTH, height: ITEM_HEIGHT}}
            resizeMode="stretch"
            source={
              item.urlImage === ''
                ? require('../../assets/perahukertas.jpg')
                : {uri: item.urlImage}
            }
          />
        </View>
        <View style={{top: spacing}}>
          <Text>{item.text}</Text>
        </View>
      </View>
      <View
        style={{
          top: TOP * 1.2,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Image
          style={{height: 50, width: 50, borderRadius: 40}}
          source={require('../../assets/maudy.jpg')}
        />
        <View style={{paddingLeft: 20}}>
          <Text style={globalStyle.textUsual}>Written by</Text>
          <Text>
            <Text style={globalStyle.smallText}>{item.fullName}</Text>
          </Text>
        </View>
      </View>
      <View style={{height: 70}} />
    </ScrollView>
  );
};
export default Detail;
