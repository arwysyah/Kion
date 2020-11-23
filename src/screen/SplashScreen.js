import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Easing,
} from 'react-native';
import {version as app_version} from './../../package.json';
import { globalStyle } from '../components/color';
// import { TouchableOpacity } from 'react-native-gesture-handler'
const {height, width} = Dimensions.get('window');
const SIZE = height / 32;
export default function SplashScreen({navigation}) {
  const moveLeft = useRef(new Animated.Value(0)).current;
  const moveRight = useRef(new Animated.Value(0)).current;
  const opacity = useState(new Animated.Value(0))[0];
  const [hide, setHide] = useState(false);
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  const opacityText= useRef(new Animated.Value(0)).current

  useEffect(() => {
    startImageRotate();
  }, [rotateValue]);
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    
        Animated.timing(opacityText, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
    }, 1800);
  }, []);

  function startImageRotate() {
    rotateValue.setValue(0);

    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }
  async function moveDrawer() {
    await Animated.timing(moveLeft, {
      toValue: -500,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    await Animated.timing(moveRight, {
      toValue: 500,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setHide(true);

    //   Animated.timing(moveDown, {
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }).start();
    await setTimeout(() => {
      navigation.replace('SlideNavigation');
    }, 600);
  }
  const rotateImage = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const drawerOne = {
    backgroundColor: '#f0f0f0',
    width: width / 2,
    height: height * 2,
    // left:-2,
    transform: [{translateX: moveLeft}],
  };
  const drawerTwo = {
    backgroundColor: '#f0f0f0',
    width: width / 2,
    // right:-2,
    height: height * 2,
    transform: [{translateX: moveRight}],
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Animated.View style={[drawerOne]} />
        <Animated.View style={[drawerTwo]} />
      </View>
      <Animated.Text
        style={{
          color: 'black',
          position: 'absolute',
          top: height / 1.5,
          fontSize: SIZE,
          left: width / 2.9,
          opacity,
        }}>
        Press Button
      </Animated.Text>
      {hide === false && (
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              transform: [{rotate: rotateImage}],
            },
          ]}>
          <TouchableOpacity style={globalStyle.logoButton} onPress={moveDrawer}>
            <Image
              style={[globalStyle.image]}
              source={require('../../assets/logoButton.png')}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 14}}>Version {app_version}</Text>
      <Animated.Text
      style={{opacity:opacityText}}>Created by Arwy Syahputra Siregar</Animated.Text>
    
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

 
  buttonContainer: {
    top: height / 2.5,
    alignItems: 'center',
    position: 'absolute',
    left: width / 3.4,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
