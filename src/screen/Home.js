import React, {useEffect, useState, useMemo} from 'react';
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

// import articlesData from '../components/data/articleData';
const AnimatedFlatlist = Animated.createAnimatedComponent(RoundTopAccount);
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
LogBox.ignoreLogs(['Setting a timer for a long period of time']);
const Home = ({navigation}) => {
  const [text, setText] = React.useState('');
  const scrollY = new Animated.Value(0);
  const [count, setCount] = useState(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 90);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
  });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(data);
      setLoading(false);
    }, 1000);
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
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
          style={{width: width / 9.4, height: width / 9.4, left: -spacing}}
        />
</TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <MaterialCommunity
            name="chat-processing"
            size={28}
            color="white"
            style={{top: spacing - 5}}
          />
          <Text style={{fontSize: 12, color: 'white'}}>Chat</Text>
        </TouchableOpacity>
      </View>

      <Animated.ScrollView
        onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}>
        <Text style={{fontSize: 16, color: 'white', paddingLeft: 12, top: 7}}>
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
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default Home;
