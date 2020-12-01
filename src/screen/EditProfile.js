import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import {globalStyle, spacing, TOP, width} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector} from 'react-redux';
import firebase from 'firebase';
import newData from '../components/data/data';
export default function EditProfile({navigation}) {
  const userData = useSelector((state) => state.userByID);
  function handleLogout() {
    Alert.alert(
      '',
      'Are you sure want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => logOut()},
      ],
      {cancelable: false},
    );
  }

  async function logOut() {
    try {
      await firebase.auth().signOut();
      navigation.replace('Auth');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={globalStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          top: spacing,
        }}>
        <TouchableOpacity
          style={globalStyle.backIconContainer}
          onPress={() => navigation.goBack()}>
          <MaterialCommunity name={'arrow-left'} size={25} />
        </TouchableOpacity>
        <Text style={globalStyle.titleWrite}>Edit Profile</Text>
      </View>
      <View style={{alignItems: 'center', top: TOP}}>
        <View style={globalStyle.BackprofileImage}>
          {userData.profilImage === undefined ? (
            <Text
              style={{
                fontSize: 90,
                color: 'black',
                position: 'absolute',
                textAlign: 'center',
                left: 40,
                top: 5,
              }}>
           {userData.username.charAt(0)}
            </Text>
          ) : (
            <Image
              source={{uri: userData.profilImage}}
              style={globalStyle.profilImageBigger}
              resizeMode="stretch"
            />
          )}
        </View>
      </View>
      <View style={{top: TOP * 3}}>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          // onPress={() => this.toggleModal('Full Name')}
        >
          <Text style={globalStyle.smallText}>Full Name</Text>
          <View style={globalStyle.flexRow}>
            <Text style={globalStyle.profileInfoText}>
              {' '}
              {userData.fullName}{' '}
            </Text>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 5}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          // onPress={() => this.toggleModal('E-mail Address')}
        >
          <Text style={globalStyle.smallText}>E-mail Address</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={globalStyle.profileInfoText}>{userData.email}</Text>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 5}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          // onPress={() => this.toggleModal('E-mail Address')}
        >
          <Text style={globalStyle.smallText}>Mobile Number</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={globalStyle.profileInfoText}>+62 82255248976</Text>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 5}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          // onPress={() => this.toggleModal('About Me')}
        >
          <Text style={globalStyle.smallText}>About Me</Text>

          <View style={globalStyle.flexRow}>
            <View style={{width: width - 70}}>
              <Text
                style={[
                  globalStyle.smallText,
                  {fontWeight: 'bold', fontSize: 13},
                ]}>
                {userData.about}
              </Text>
            </View>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 15}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{top: TOP * 4}}>
        <TouchableOpacity
          style={globalStyle.commonButton}
          onPress={handleLogout}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

{
  /* <Modal
  isVisible={this.state.isModalVisible}
  onBackButtonPress={() => this.toggleModal()}>
  <View style={globalStyle.closeButtonModal}>
    <TouchableOpacity onPress={() => this.toggleModal()}>
      <Icons name="close" size={25} />
    </TouchableOpacity>
  </View>
  <View style={globalStyle.modalContainer}>
    {this.modalUpdateFieldComponent()}
  </View>
</Modal> */
}
