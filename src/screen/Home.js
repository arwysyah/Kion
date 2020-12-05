import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  ActivityIndicator,
} from 'react-native';
import TopAccount from '../components/topAccount';
import Articles from '../components/articles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch, createSelectorHook} from 'react-redux';
import {
  WATCHDATA,
  GET_USER_BYID,
  GET_POSTING_CURRENT_USER,
  GET_ALL_POST,
  WATCH_ALL_USERS,
  GET_GALLERY_BY_ID
} from '../redux/action';
import firebase from 'firebase';
import {
  globalStyle,
  black,
  spacing,
  TOP,
  ITEM_HEIGHT,
  BACKCOLOR,
} from '../components/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parallax from '../components/Parallax';
import HorizontalArticle from '../components/horizontalArticles';
import Topic from './Topic';

// import articlesData from '../components/data/articleData';
// const AnimatedFlatlist = Animated.createAnimatedComponent(RoundTopAccount);

const Home = ({navigation}) => {
  const uid = firebase.auth().currentUser.uid;
  const [loading, setLoading] = useState(false);
  const [archived, setArchived] = useState([]);

  const topics = useState([
    'Technology',
    'Sains',
    'Story',
    'University',
    'Scholarship',
    'Internship',
  ]);
  const globalState = useSelector((state) => state);
console.log(globalState.galleryData,'ss')
  const articleData = globalState.posts;

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const newData = await AsyncStorage.getItem('PIN').then((req) =>
        JSON.parse(req),
      );
      setArchived(newData);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      dispatch(WATCHDATA());
      dispatch(GET_USER_BYID(uid));
      dispatch(GET_POSTING_CURRENT_USER(uid));
      dispatch(GET_ALL_POST());
      dispatch(WATCH_ALL_USERS());
      dispatch(GET_GALLERY_BY_ID(uid));
      setLoading(false);
      getData();
     
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (loading === true) {
    return (
      <View style={globalStyle.loadingScreen}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  return (
    <SafeAreaView style={globalStyle.optionalContainer}>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: BACKCOLOR,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MaterialCommunity
            name="account-tie"
            size={28}
            color={black}
            style={{top: spacing - 7, left: spacing / 6}}
          />
          <Text style={globalStyle.iconText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <MaterialCommunity
            name="chat-processing"
            size={28}
            color={black}
            style={{top: spacing - 7}}
          />
          <Text style={{fontSize: 12, color: 'black'}}>Chat</Text>
        </TouchableOpacity>
      </View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        // onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}
      >
        <Text style={{fontSize: 12, color: black, paddingLeft: 12}}>
          Populer
        </Text>
        <View style={{top: -(TOP * 4)}}>
          <Parallax navigation={navigation}/>
        </View>

        <View
          style={{
            top: -(TOP * 5),
            height: ITEM_HEIGHT * 1.2,
            backgroundColor: BACKCOLOR,
          }}>
          <View style={{height: 40}}>
            <Text style={[globalStyle.titleWrite, {paddingLeft: TOP}]}>
              Based On Your Read
            </Text>
          </View>
          <HorizontalArticle
            data={articleData}
            navigation={navigation}
            routes={'Home'}
          />
        </View>
        <View style={{top: -(4.2 * TOP)}}>
          <Articles
            data={articleData}
            navigation={navigation}
            routes={'Home'}
          />
          <View style={{marginTop: 13}}>
            <HorizontalArticle
              data={articleData}
              navigation={navigation}
              routes={'Home'}
            />
          </View>
          <View style={{marginTop: 20, backgroundColor: BACKCOLOR}}>
            <Articles
              data={articleData}
              navigation={navigation}
              routes={'Home'}
            />
          </View>
          <View style={{top: 10}}>
            <Topic data={topics} navigation={navigation} />
          </View>
          {/* {archived.length > 0 && (
            <View>
              <Text
                style={{
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  left: 20,
                  fontSize: 20,
                }}>
                Archived
              </Text>
              <HorizontalArticle
                data={archived}
                navigation={navigation}
                routes={'Home'}
              />
            </View>
          )} */}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Home;
