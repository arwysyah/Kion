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
import {globalStyle,iconColor, black,height,spacing,SIZE,width} from '../components/color'

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
  const translateY = diffClamp.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
  });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  useLayoutEffect(() => {
     setData(data);
      dispatch(watchData())

  }, [data,dispatch]);
  console.log('loads')

  return (
    <SafeAreaView style={globalStyle.container}>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={{fontSize: 30, color: 'white'}}>{count}</Text>
        </TouchableOpacity> */}
<TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
        <Image
          source={require('../../assets/logoButton.png')}
          style={{width: width / 9.4, height: width / 9.8, left: -spacing}}
        />
         <Text style={{fontSize: 12, color:'black',top:-10}}>Notifikasi</Text>
</TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <MaterialCommunity
            name="chat-processing"
            size={28}
            color={iconColor}
            style={{top: spacing - 5}}
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
      
        <RoundTopAccount
          data={articleData}

          // translateY={translateY}
        />
        <TopAccount navigation={navigation} />

        <Articles data={articleData} navigation={navigation} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});
export default Home;
