
import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const BackgroundImage = ({data, scrollX}) => {

    return (
      <View style={{height: BACKDROPHEIGHT, position: 'absolute', width}}>
        <FlatList
          pagingEnabled
          horizontal
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            if (!item.id) {
              return null;
            }
            const inputRange = [(index - 2) * SIZE, index * SIZE];
            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [-width, 0],
            });
            return (
              <Animated.View>
                <Image source={item.image} style={styles.backgroundImage} />
              </Animated.View>
            );
          }}
        />
      </View>
    );
  };
export default BackgroundImage  