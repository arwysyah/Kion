import React, {useState, useMemo} from 'react';
import {View, Text, Image} from 'react-native';
import ProfileText from './textProfile';
import {globalStyle, spacing, width, TOP} from './styles';
import FastImage from 'react-native-fast-image';

const BioProfile = ({newData,postingan}) => {
  const {following, follower, profilImage, verified, fullName, about} = newData;
  const data = useMemo(() => {
    return [postingan, following, follower];
  }, []);
  const profileData = useMemo(() => {
    return ['Postingan', 'Pengikut ', 'Mengikuti'];
  }, []);
  return (
    <View>
      <View style={globalStyle.secondContainer}>
        <View>
          <View style={[globalStyle.profilImageBack, {left: -5}]}>
            {profilImage === undefined ? (
              <Text
                style={{
                  fontSize: 70,
                  color: 'black',
                  position: 'absolute',
                  textAlign: 'center',
                  left: 30,
                  top: 5,
                }}>
                A
              </Text>
            ) : (
              <FastImage
                style={globalStyle.profilImage}
                source={{
                  uri: profilImage,
                  headers: {Authorization: 'StRSUJDJASDIouwebqmwbj'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}

            {verified === 'yes' && (
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
          {fullName}
        </Text>
        <Text
          style={{
            fontSize: 11,
            top: -3,
            left: 10,
          }}>
          {about}
        </Text>
      </View>
    </View>
  );
};
export default BioProfile;
