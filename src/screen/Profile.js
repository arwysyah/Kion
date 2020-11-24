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
import articleData from '../components/data/articleData';
import Articles from '../components/articles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileText from '../components/textProfile';
import {globalStyle, spacing, width, TOP} from '../components/styles';

export default function Profile({navigation}) {
  const profileData = useMemo(() => {
    return ['Postingan', 'Pengikut ', 'Mengikuti'];
  }, []);
  const data = useMemo(() => {
    return [88, 87, 69];
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
            Maudy Ayunda
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
            <View style={globalStyle.profilImageBack}>
              <Image
                source={require('../../assets/maudy.jpg')}
                style={globalStyle.profilImage}
              />
            </View>
            <Text
              style={[
                globalStyle.commonText,
                {paddingLeft: spacing, fontWeight: 'bold'},
              ]}>
              Maudy Ayunda
            </Text>
          </View>

          <View>
            <ProfileText data={profileData} textStyles={globalStyle.text} />
            <ProfileText data={data} textStyles={globalStyle.texts} />
          </View>
        </View>
        <Articles
          data={articleData}
          navigation={navigation}
          from={'Profile'}
          routes={'Profile'}
        />
      </ScrollView>
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
    justifyContent: 'space-around',
    padding: spacing * 1.2,
    left: -10,
    top: -7,
  },
});
