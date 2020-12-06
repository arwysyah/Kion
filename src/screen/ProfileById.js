import React, {useState, useMemo, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ToastAndroid,
  Alert,
} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle, spacing, width, TOP, height} from '../components/styles';
import {useSelector, useDispatch} from 'react-redux';
import HeaderSlide from '../components/headerSlide';
import BioProfile from '../components/BioProfile';
import firebase from 'firebase';
import {
  GET_POSTING_OTHER_USER,
  GET_GALLERY_OTHER_BY_ID,
  WATCH_FOLLOWING,
} from '../redux/action';
export default function ProfileById({navigation, route}) {
  const {item} = route.params;
  const {uid} = item;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_POSTING_OTHER_USER(uid));
    dispatch(GET_GALLERY_OTHER_BY_ID(uid));
    dispatch(WATCH_FOLLOWING(uid));
  }, []);
  const {username} = item;
  const fetchDataUser = useSelector((state) => state);
  const articleData = fetchDataUser.otherUserPost;
  const postingan = articleData.length;
  const gallery = fetchDataUser.galleryOtherUser;
  const currentUserID = firebase.auth().currentUser.uid;
  const following = fetchDataUser.following;
  console.log(following);
  function userExists(id) {
    if (following === '') {
      return false;
    } else {
      return following.some(function (el) {
        return el.idFollower === id;
      });
    }
  }
  async function fetchFollow() {
    const ref = await firebase.database().ref(`/follow/${uid}`);
    try {
      // await ref.set({
      //   idFollower:currentUserID,
      //   idFollowing:uid,
      //   createdAt:new Date().getTime(),
      //   status:'true',

      // }).then(()=>
      // ToastAndroid.show('Berhasil Mengikuti',ToastAndroid.SHORT))

      await ref
        .child(uid)
        .set({
          idFollower: currentUserID,
          idFollowing: uid,
          createdAt: new Date().getTime(),
          status: 'true',
        })
        // .then(() => dispatch(WATCH_FOLLOWING(uid)))
        .then(() => {
          ToastAndroid.show('Berhasil Mengikuti', ToastAndroid.SHORT);
        });
    } catch (error) {
      console.log(error);
      alert('Maaf terjadi kesalahan');
    }
  }

  async function unfollow() {
    let userRef = await firebase.database().ref(`/follow/${uid}`);
    userRef
      .remove()
      .then(function () {
        ToastAndroid.show('Berhasil berhenti mengikuti', ToastAndroid.SHORT);
      })
      .catch(function (error) {
        Alert.alert('Remove failed: ' + error.message);
      });
  }
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
        {uid !== currentUserID && (
          <View style={{alignItems: 'center'}}>
            {userExists(currentUserID) !== true ? (
              <TouchableOpacity
                onPress={fetchFollow}
                style={{
                  width: width * 0.9,
                  backgroundColor: '#5790f2',
                  height: 30,
                  borderRadius: 7,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center', color: '#FFFFFF'}}>
                  Ikuti
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={unfollow}
                style={{
                  width: width * 0.9,
                  backgroundColor: '#FFFFFF',
                  height: 30,
                  borderRadius: 7,
                  justifyContent: 'center',
                  borderColor: 'grey',
                  borderWidth: 0.6,
                }}>
                <Text style={{color: 'black', textAlign: 'center'}}>
                  Mengikuti
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        <HeaderSlide
          navigation={navigation}
          articleData={articleData}
          gallery={gallery}
        />
      </ScrollView>
      <View style={{height: spacing * 4}} />
    </SafeAreaView>
  );
}
