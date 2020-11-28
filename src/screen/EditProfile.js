import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native';
import {globalStyle, spacing, TOP} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  GoogleSignin,

} from '@react-native-community/google-signin';
export default function EditProfile({navigation}) {
  function handleLogout(){
    Alert.alert(
      '',
      'Are you sure want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>logOut()},
      ],
      {cancelable: false},
    );
  };


  async function logOut() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
navigation.replace('Login')
    } catch (error) {
      console.error(error);
    }
  };

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
          <Image
            source={require('../../assets/maudy.jpg')}
            style={globalStyle.profilImageBigger}
          />
        </View>
      </View>
      <View style={{top: TOP * 3}}>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          // onPress={() => this.toggleModal('Full Name')}
        >
          <Text style={globalStyle.smallText}>Full Name</Text>
          <View style={globalStyle.flexRow}>
            <Text style={globalStyle.profileInfoText}> Maudy Ayunda </Text>
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
            <Text style={globalStyle.profileInfoText}>
              maudyayunda@gmail.com
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
            <Text style={globalStyle.profileInfoText}></Text>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 15}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{top:TOP*4}}>
        <TouchableOpacity style={globalStyle.commonButton} onPress={handleLogout}>
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
