import React, {useEffect, useState, useMemo, useLayoutEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  Animated,
  ScrollView,
  LogBox,
  TextInput,
} from 'react-native';
import TopAccount from '../components/topAccount';
import articleData from '../components/data/articleData';
import Articles from '../components/articles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch, createSelectorHook} from 'react-redux';
import {watchData, getUserById, WATCHDATA, GET_USER_BYID} from '../redux/action';
import firebase from 'firebase'
import {
  globalStyle,
  iconColor,
  black,
  height,
  spacing,
  SIZE,
  width,
  arrayColor,
  TOP,
  white,
  ITEM_HEIGHT,
} from '../components/styles';
import Parallax from '../components/Parallax'
import HorizontalArticle from '../components/horizontalArticles';
import Topic from './Topic';

// import articlesData from '../components/data/articleData';
// const AnimatedFlatlist = Animated.createAnimatedComponent(RoundTopAccount);

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const Home = ({navigation}) => {
  const uid = firebase.auth().currentUser.uid
  const topics = useState([
    'Technology',
    'Sains',
    'Story',
    'University',
    'Scholarship',
    'Internship',
  ]);
  const globalState = useSelector((state) => state);
  // const getCarsSelector = createSelectorHook(globalState, (request) => request);
  // const [text, setText] = React.useState('');
  const scrollY = new Animated.Value(0);
  // const [count, setCount] = useState(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 90);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(data);
    dispatch(WATCHDATA());
  dispatch(GET_USER_BYID(uid))
  }, []);


  return (
    <SafeAreaView style={globalStyle.container}>
      {/* <LinearGradient colors={arrayColor} style={{flex: 1}}> */}
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
          paddingHorizontal: 20,
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
        <Text style={{fontSize: 12, color: black, paddingLeft: 12, }}>
          Populer
        </Text>

        {/* <RoundTopAccount
          data={articleData}

          // translateY={translateY}
        /> */}
        {/* <TopAccount navigation={navigation} /> */}
       <View style={{top:-(TOP*4)}}>
       <Parallax />
       </View>
   
        <View style={{top:-(TOP*5),height:ITEM_HEIGHT*1.2}}>
        <View style={{height:40}}>
         <Text style={[globalStyle.titleWrite,{paddingLeft:TOP}]} >Based On Your Read</Text>
         </View>
        <HorizontalArticle
          data={articleData}
          navigation={navigation}
          routes={'Home'}
        />
        </View>
        <View style={{top:-(4*TOP)}}>
        <Articles data={articleData} navigation={navigation} routes={'Home'} />
        <HorizontalArticle
          data={articleData}
          navigation={navigation}
          routes={'Home'}
        />
        <Articles data={articleData} navigation={navigation} routes={'Home'} />
        <Topic
        data={topics}
        navigation={navigation}/>
        </View>
      </Animated.ScrollView>

      <View style={{height: 40}} />
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Home;
