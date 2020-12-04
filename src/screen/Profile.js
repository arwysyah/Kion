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
import Articles from '../components/articles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileText from '../components/textProfile';
import {globalStyle, spacing, width, TOP, height} from '../components/styles';
import {useSelector} from 'react-redux';
import HeaderSlide from '../components/headerSlide';
import FastImage from 'react-native-fast-image';
export default function Profile({navigation}) {
  const profileData = useMemo(() => {
    return ['Postingan', 'Pengikut ', 'Mengikuti'];
  }, []);
  const fetchDataUser = useSelector((state) => state);
  const newData = fetchDataUser.userByID;
  const articleData = fetchDataUser.postBYID;
  const postingan = articleData.length;
  const data = useMemo(() => {
    return [postingan, newData.following, newData.follower];
  }, []);

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
        <View style={styles.secondContainer}>
          <View>
            <View
              style={[
                globalStyle.profilImageBack,
                {left: -5, },
              ]}>
              {newData.profilImage === undefined ? (
                <Text
                  style={{
                    fontSize: 70,
                    color: 'black',
                    position: 'absolute',
                    textAlign: 'center',
                    left: 30,
                    top: 5,
                  }}>
                  {newData.fullName.charAt(0)}
                </Text>
              ) : (
                <FastImage
                  style={globalStyle.profilImage}
                  source={{
                    uri: newData.profilImage,
                    headers: {Authorization: 'StRSUJDJASDIouwebqmwbj'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              )}

              {newData.verified === 'yes' && (
                <Image
                  source={require('../../assets/verified.png')}
                  style={{
                    width: 23,
                    height: 23,
                    top: -(TOP * 4),
                    left: TOP * 3,
                  }}
                />
              )}
            </View>
          </View>

          <View>
            <ProfileText data={profileData} textStyles={globalStyle.text} />
            <ProfileText data={data} textStyles={globalStyle.texts} />
          </View>
        </View>

        <View style={{width: width * 0.6, top: -10, left: 8}}>
          <Text
            style={[
              globalStyle.commonText,
              {paddingLeft: spacing, fontWeight: 'bold'},
            ]}>
            {newData.fullName}
          </Text>
          <Text
            style={{
              fontSize: 11,
              top: -3,
              left: 10,
            }}>
            {newData.about}
          </Text>
        </View>

        <HeaderSlide navigation={navigation} />
      </ScrollView>
      <View style={{height: spacing * 4}} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },

  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing * 1.2,

    // left: -10,
    // top: -7,
  },
});
