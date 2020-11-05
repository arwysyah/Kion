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
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import TopAccount from '../components/topAccount';
import articleData from '../components/data/articleData';
import Articles from '../components/articles';
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopAccount navigation={navigation} />

        <Articles data={articleData} />
      </ScrollView>
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
