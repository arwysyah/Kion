import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Easing
} from 'react-native';


// import { TouchableOpacity } from 'react-native-gesture-handler'
const {height, width} = Dimensions.get('window');
const SIZE = height/32
export default function SplashScreen({navigation}) {
  const moveLeft = useRef(new Animated.Value(0)).current;
  const moveRight= useRef(new Animated.Value(0)).current
//   const moveDown= useRef(new Animated.Value(0)).current

  const moveDrawer = async() => {
      
   await Animated.timing(moveLeft, {
      toValue: -500,
      duration: 1000,
      useNativeDriver: true,
    }).start();
      
   await Animated.timing(moveRight, {
        toValue:1000,
        duration: 1000,
        useNativeDriver: true,
     
      }).start();
    //   Animated.timing(moveDown, {
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }).start();
   await setTimeout(()=>{
        navigation.navigate('SlideNavigation')
    },800)
  

  };
  const drawerOne = {
    backgroundColor: 'white',
    width: width / 2,
    height: height*2,
    // left:-2,
    transform: [{translateX: moveLeft}],
  };
  const drawerTwo = {
    backgroundColor: 'white',
    width: width / 2,
    // right:-2,
    height: height*2,
    transform: [{translateX: moveRight}],
  };
 

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',flex:1}}>
        <Animated.View style={[drawerOne]} />
        <Animated.View style={[drawerTwo]} />
      </View>
      <Text style={{color:'black',position:'absolute',top:height/1.5,fontSize:SIZE,left:width/2.9}}>Press Button</Text>

      <View
        style={[styles.buttonContainer]
        }>
        <TouchableOpacity style={styles.button} onPress={moveDrawer}>
          <Image
            style={[styles.image]}
            source={require('../../assets/logoButton.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: height / 4,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
  },
  button: {
    height: height / 4.4,
    backgroundColor: 'red',
    width: width / 2.3,
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: 'black',

    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    // position:'absolute',
  },
  buttonContainer:{
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
