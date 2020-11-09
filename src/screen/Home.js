import React from 'react';
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
  TextInput
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import TopAccount from '../components/topAccount';
import articleData from '../components/data/articleData';
import Articles from '../components/articles';
import RoundTopAccount from '../components/roundTopAccount';
import {useScrollToTop} from '@react-navigation/native';
// import articlesData from '../components/data/articleData';
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
const Home = ({navigation}) => {
  const [text,setText]= React.useState('')
  return (
    <SafeAreaView style={styles.container}>
      <RoundTopAccount data={articleData} style={{height: 100}} />
      <ScrollView>
        <TopAccount navigation={navigation} />

        <Articles data={articleData} navigation={navigation} />
      </ScrollView>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setText(text)}
      // value={value}
    />
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
