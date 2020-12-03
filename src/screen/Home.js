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
} from '../redux/action';
import firebase from 'firebase';
import {
  globalStyle,
  black,
  spacing,
  TOP,
  white,
  ITEM_HEIGHT,
  backgroundColor,
} from '../components/styles';
import Parallax from '../components/Parallax';
import HorizontalArticle from '../components/horizontalArticles';
import Topic from './Topic';

// import articlesData from '../components/data/articleData';
// const AnimatedFlatlist = Animated.createAnimatedComponent(RoundTopAccount);

const Home = ({navigation}) => {
  const uid = firebase.auth().currentUser.uid;
  const [loading, setLoading] = useState(false);
  const topics = useState([
    'Technology',
    'Sains',
    'Story',
    'University',
    'Scholarship',
    'Internship',
  ]);
  const globalState = useSelector((state) => state);

  const articleData = globalState.posts;
  // const getCarsSelector = createSelectorHook(globalState, (request) => request);
  // const [text, setText] = React.useState('');
  const scrollY = new Animated.Value(0);
  // const [count, setCount] = useState(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 90);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true)
   let timer =  setTimeout(()=>{
      dispatch(WATCHDATA());
      dispatch(GET_USER_BYID(uid));
      dispatch(GET_POSTING_CURRENT_USER(uid));
      dispatch(GET_ALL_POST());
      dispatch(WATCH_ALL_USERS())
      setLoading(false)
    },2000)
    return () => {
      clearTimeout(timer)
    }
  }, []);
  if (loading === true) {
    return <View style={{justifyContent:'center',alignItems:'center',alignContent:"center",alignSelf:'center',flex:1}}>
      <ActivityIndicator size="large" color="red" 
   />
    </View>;
  }
  return (
    <SafeAreaView style={globalStyle.optionalContainer}>
      {/* <LinearGradient colors={arrayColor} style={{flex: 1}}> */}
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: white,
        }}>
        {/* <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={{fontSize: 30, color: 'white'}}>{count}</Text>
        </TouchableOpacity> */}
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
        onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}>
        <Text style={{fontSize: 12, color: black, paddingLeft: 12}}>
          Populer
        </Text>

        {/* <RoundTopAccount
          data={articleData}

          // translateY={translateY}
        /> */}
        {/* <TopAccount navigation={navigation} /> */}
        <View style={{top: -(TOP * 4)}}>
          <Parallax />
        </View>

        <View
          style={{
            top: -(TOP * 5),
            height: ITEM_HEIGHT * 1.2,
            backgroundColor: backgroundColor,
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
          <View style={{marginTop: 20, backgroundColor: backgroundColor}}>
            <Articles
              data={articleData}
              navigation={navigation}
              routes={'Home'}
            />
          </View>
          <View style={{top: 10}}>
            <Topic data={topics} navigation={navigation} />
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Home;
