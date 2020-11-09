import React,{memo} from 'react';
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
} from 'react-native';
import newData from './data/data';
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;
const TopAccount = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
console.log('hahah')
  const data = [{id: 29}, ...newData, {id: 22}];

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        style={{top: -20}}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        horizontal
        snapToInterval={SIZE}
        bounces={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          if (!item.image) {
            return <View style={{width: Spacer, height: 200}}></View>;
          } else {
            const inputRange = [
              (index - 2) * SIZE,
              (index - 1) * SIZE,
              index * SIZE,
            ];
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0],
            });
            return (
              <View style={{width: SIZE}}>
                <Animated.View
                  style={{
                    marginHorizontal: spacing - 40,
                    padding: spacing * 9,
                    alignItems: 'center',
                    borderRadius: 34,
                    // backgroundColor: 'white',
                    transform: [{translateY}],
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Detail')}>
                    <Image
                      source={item.image}
                      style={{
                        width: SIZE - 90,
                        height: SIZE + 20,
                        borderRadius: 30,
                      }}
                    />
                  </TouchableOpacity>
                </Animated.View>
              </View>
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: BACKDROPHEIGHT,
    // backgroundColor: 'black',
  },
  container: {
    flex: 1,
    // backgroundColor:"black"
  },
});
export default memo(TopAccount);
