import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  ToastAndroid,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {globalStyle, spacing, TOP, width} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import firebase from 'firebase';
export default function EditProfile({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalCredVisible, setModalCredVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [selected2, setSelected2] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [updatedField, setUpdateField] = useState('');
  const [updatedField2, setUpdateField2] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [profilImage, setProfilImage] = useState('');

  const userData = useSelector((state) => state.userByID);
  useEffect(() => {
    getProfile();
  });
  async function getProfile() {
    setFullName(userData.fullName);
    setEmail(userData.email);
    setUsername(userData.username);
    setAbout(userData.about);
    setProfilImage(userData.profilImage);
  }

  function toggleModal(selectedField) {
    setModalVisible(!isModalVisible);
    setSelected(selectedField);
  }
  function toggleModalCred(selectedField2) {
    setModalCredVisible(!isModalCredVisible);
    setSelected2(selectedField2);
  }
  function authentication(currentPassword) {
    let user = firebase.auth().currentUser;
    let credKey = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    return user.reauthenticateWithCredential(credKey);
  }
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

  async function updateNewEmail() {
    let newData = {};
    const uid = await firebase.auth().currentUser.uid;
    const ref = firebase.database().ref(`/users/${uid}`);
    newData = {
      uid,
      email: updatedField2,
    };
    if (selected2 !== 'E-mail Address' && updatedField2.length < 7) {
      Alert.alert('Password must be more than 8 characters');
    } else if (selected2 === 'E-mail Address' && updatedField2.length < 10) {
      Alert.alert('Email must be more than 10 characters');
    } else {
      let user = firebase.auth().currentUser;
      authentication(password)
        .then(() => {
          selected2 === 'E-mail Address'
            ? user.updateEmail(updatedField2)
            : user.updatePassword(updatedField2);
          setTimeout(async () => {
            selected2 === 'E-mail Address' && (await ref.update(newData));
            await setLoading(false);
            await setModalCredVisible(false);

            ToastAndroid.showWithGravity(
              'Data Updated',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }, 200);
          setLoading(true);
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    }
  }
  async function logOut() {
    try {
      await firebase.auth().signOut();
      navigation.replace('Auth');
    } catch (error) {
      console.error(error);
    }
  }

  async function updateProfile() {
    var updatedData = {};

    const uid = await firebase.auth().currentUser.uid;
    const ref = firebase.database().ref(`/users/${uid}`);

    if (selected === 'Full Name') {
      updatedData = {
        uid,
        fullName: updatedField,
      };
    } else if (selected === 'E-mail Address') {
      updatedData = {
        uid,
        email: updatedField,
      };
    } else {
      updatedData = {
        uid,
        about: updatedField,
      };
    }

    if (updatedField.length < 8) {
      Alert.alert(`${selected} must be more than 7 characters`);
    } else {
      setTimeout(async () => {
        await ref.update(updatedData);
        setLoading(false);
        setModalVisible(false);
        ToastAndroid.showWithGravity(
          'Data Updated',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }, 200);
      setLoading(true);
    }
  }
  modalUpdateFieldComponentCred = () => {
    var updateData = '';
    if (selected2 === 'E-mail Address') {
      updateData = email;
    } else {
      updateData = newPassword;
    }
    return (
      <>
        <View style={{marginHorizontal: 20, marginVertical: 15}}>
          <Text style={{fontSize: 16, left: 5}}>
            {selected2 === 'Password' ? 'New Password' : 'Email Address'}
          </Text>
          <TextInput
            style={{fontWeight: 'bold', fontSize: 18}}
            defaultValue={updateData}
            placeholder={
              selected2 === 'Password' ? 'New Password' : 'Email Address'
            }
            secureTextEntry={selected2 === 'Password' ? true : false}
            underlineColorAndroid="grey"
            onChangeText={(uNewData) => setUpdateField2(uNewData)}
          />

          <View style={{height: 20}} />
          <Text style={{fontSize: 16, left: 5}}>Password</Text>
          <TextInput
            style={{fontWeight: 'bold', fontSize: 18}}
            placeholder="Password"
            underlineColorAndroid="grey"
            // defaultValue={pass}

            secureTextEntry={true}
            onChangeText={(uNewData) => setPassword(uNewData)}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={updateNewEmail}
            style={{
              width: width - 250,
              height: 45,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#D23B4B',
              marginTop: 20,
              marginBottom: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  modalUpdateFieldComponent = () => {
    var updateData = '';
    if (selected === 'Full Name') {
      updateData = fullName;
    } else {
      updateData = about;
    }

    return (
      <>
        <View style={{marginHorizontal: 20, marginVertical: 15}}>
          <Text style={{fontSize: 16}}>{selected}</Text>
          <TextInput
            style={{fontWeight: 'bold', fontSize: 18}}
            defaultValue={updateData}
            underlineColorAndroid="grey"
            onChangeText={(uNewData) => setUpdateField(uNewData)}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={updateProfile}
            style={{
              width: width - 250,
              height: 45,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#D23B4B',
              marginTop: 20,
              marginBottom: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
            }}>
            <Text
              style={{
                fontSize: 17,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  if (isLoading) {
    return (
      <View style={globalStyle.loadingScreen}>
        <ActivityIndicator size="large" color="#D23B4B" />
      </View>
    );
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
              resizeMode="cover"
            />
          )}
        </View>
      </View>
      <View style={{top: TOP * 3}}>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          onPress={() => toggleModal('Full Name')}>
          <Text style={globalStyle.smallText}>Full Name</Text>
          <View style={globalStyle.flexRow}>
            <Text style={globalStyle.profileInfoText}> {fullName} </Text>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 5}}
            />
          </View>
        </TouchableOpacity>
        <View
          style={globalStyle.profileInfoTouchable}
          // onPress={() => toggleModal('E-mail Address')}
        >
          <Text style={globalStyle.smallText}>E-mail Address</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={globalStyle.profileInfoText}>{email}</Text>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 5}}
            />
          </View>
        </View>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          onPress={() => toggleModalCred('Password')}>
          <Text style={{fontSize: 12, color: 'grey'}}>Password</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={globalStyle.profileInfoText}>********</Text>
            <Image
              source={require('../../assets/chevronForward.png')}
              style={{top: 5}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyle.profileInfoTouchable}
          onPress={() => alert('Belum menyediakan fitur verifikasi number')}>
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
          onPress={() => toggleModal('About Me')}>
          <Text style={globalStyle.smallText}>About Me</Text>

          <View style={globalStyle.flexRow}>
            <View style={{width: width - 70}}>
              <Text
                style={[
                  globalStyle.smallText,
                  {fontWeight: 'bold', fontSize: 13},
                ]}>
                {about}
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
      <Modal isVisible={isModalVisible} onBackButtonPress={() => toggleModal()}>
        <View style={globalStyle.closeButtonModal}>
          <TouchableOpacity onPress={() => toggleModal()}>
            <MaterialCommunity name="close" size={25} />
          </TouchableOpacity>
        </View>
        <View style={globalStyle.modalContainer}>
          {modalUpdateFieldComponent()}
        </View>
      </Modal>
      <Modal isVisible={isModalCredVisible} onBackButtonPress={toggleModalCred}>
        <View style={globalStyle.closeButtonModal}>
          <TouchableOpacity onPress={toggleModalCred}>
            <MaterialCommunity name="close" size={25} />
          </TouchableOpacity>
        </View>
        <View style={[globalStyle.modalContainer, {height: 300}]}>
          {modalUpdateFieldComponentCred()}
        </View>
      </Modal>
    </SafeAreaView>
  );
}
