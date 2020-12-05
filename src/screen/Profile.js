import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle, spacing, width} from '../components/styles';
import {useSelector} from 'react-redux';
import HeaderSlide from '../components/headerSlide';
import BioProfile from '../components/BioProfile';
export default function Profile({navigation}) {
  const fetchDataUser = useSelector((state) => state);
  const newData = fetchDataUser.userByID;
  const articleData = fetchDataUser.postBYID;
  const postingan = articleData.length;
  const gallery=fetchDataUser.galleryData

  return (
    <SafeAreaView style={globalStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 2 * spacing,
          top: spacing - 4,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[globalStyle.backIconContainer, {top: -spacing + 15}]}>
          <MaterialCommunity name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={[globalStyle.titleWrite, {justifyContent: 'center'}]}>
            {newData.username}
          </Text>
        </View>
        <TouchableOpacity
          style={[globalStyle.commonIcon, {left: width - 50, top: spacing - 5}]}
          onPress={() => navigation.navigate('EditProfile')}>
          <MaterialCommunity name="fountain-pen" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{top: 30}} showsVerticalScrollIndicator={false}>
        <BioProfile newData={newData} postingan={postingan} />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: width * 0.9,
              backgroundColor: '#5790f2',
              height: 30,
              borderRadius: 7,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', color: '#FFFFFF'}}>follow</Text>
          </TouchableOpacity>
        </View>
        <HeaderSlide navigation={navigation} articleData={articleData} gallery={gallery} />
      </ScrollView>
      <View style={{height: spacing * 4}} />
    </SafeAreaView>
  );
}
