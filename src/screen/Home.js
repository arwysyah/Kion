import React, {useEffect, useState, useMemo,useLayoutEffect} from 'react';
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
import Svg, {Rect} from 'react-native-svg';
import TopAccount from '../components/topAccount';
import articleData from '../components/data/articleData';
import Articles from '../components/articles';
import RoundTopAccount from '../components/roundTopAccount';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector,useDispatch,createSelectorHook} from 'react-redux'
import {watchData} from '../redux/redux'
import {globalStyle,iconColor, black,height,spacing,SIZE,width, arrayColor} from '../components/color'
import LinearGradient from 'react-native-linear-gradient'
// import articlesData from '../components/data/articleData';
const AnimatedFlatlist = Animated.createAnimatedComponent(RoundTopAccount);


LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const Home = ({navigation}) => {
  const globalState = useSelector(state=>state)
const getCarsSelector = createSelectorHook(globalState, request =>request );
  // const [text, setText] = React.useState('');
  const scrollY = new Animated.Value(0);
  // const [count, setCount] = useState(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 90);
  // const translateY = diffClamp.interpolate({
  //   inputRange: [0, 80],
  //   outputRange: [0, -80],
  // });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  useLayoutEffect(() => {
     setData(data);
      dispatch(watchData())

  }, [data,dispatch]);


  return (
    <SafeAreaView style={globalStyle.container}>
      <LinearGradient colors={arrayColor}  style={{flex:1}}>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={{fontSize: 30, color: 'white'}}>{count}</Text>
        </TouchableOpacity> */}
<TouchableOpacity onPress={()=>navigation.navigate('Profile')}>

<MaterialCommunity
            name="account-tie"
            size={28}
            color={iconColor}
            style={{top: spacing - 7,left:spacing-1}}
          />
         <Text style={{fontSize: 12, color:'black',textAlign:'center'}}>Notifikasi</Text>
</TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <MaterialCommunity
            name="chat-processing"
            size={28}
            color={iconColor}
            style={{top: spacing - 7}}
          />
          <Text style={{fontSize: 12, color:'black'}}>Chat</Text>
        </TouchableOpacity>
      </View>

      <Animated.ScrollView
      showsHorizontalScrollIndicator={false}
        onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}>
        <Text style={{fontSize: 16, color: black, paddingLeft: 12, top: 7}}>
          Populer
        </Text>
      
        {/* <RoundTopAccount
          data={articleData}

          // translateY={translateY}
        /> */}
        <TopAccount navigation={navigation} />

        <Articles data={articleData} navigation={navigation}
        routes={'Home'} />
      </Animated.ScrollView>

      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});
export default Home;
