import React, {useState, useMemo, useEffect} from 'react';
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
import {globalStyle, spacing, width, TOP, height} from '../components/styles';
import {useSelector, useDispatch} from 'react-redux';
import HeaderSlide from '../components/headerSlide';
import BioProfile from '../components/BioProfile';
import {GET_POSTING_OTHER_USER} from '../redux/action';
export default function ProfileById({navigation, route}) {
  const {item} = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_POSTING_OTHER_USER(item.uid));
  }, []);
  const {username} = item;
  const fetchDataUser = useSelector((state) => state);
  const articleData = fetchDataUser.otherUserPost;
  const postingan = articleData.length;
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
            {username}
          </Text>
        </View>
      </View>

      <ScrollView style={{top: 30}} showsVerticalScrollIndicator={false}>
        <BioProfile newData={item} postingan={postingan} />
        <HeaderSlide navigation={navigation} articleData={articleData} />
      </ScrollView>
      <View style={{height: spacing * 4}} />
    </SafeAreaView>
  );
}
