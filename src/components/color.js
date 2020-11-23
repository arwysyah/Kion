import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;
const globalStyle = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  icon: {
    color: '#E0E5EC',
  },
  cardContainer: {
    backgroundColor: '#fffefc',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: HEIGHT,
    borderRadius: 8,
  },
  cardPart: {
    backgroundColor: '#ffffff',
    opacity: 0.8,
alignItems:"center",
justifyContent:'center',
    height: HEIGHT/2,
    borderRadius: 8,
    // width:width/1.2,
    padding:spacing*2
  },
  text: {
    fontSize: 15,
    color: 'black',
    paddingLeft: spacing + 10,
    top: spacing * 2.5,
    // justifyContent:'c'
  },
  titleWrite:{
fontSize:20,
color:'black',
fontWeight:'bold'
  },
  titleTextName: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
    // top: spacing,
    padding: spacing,
  },
  texts: {
    fontSize: 15,
    color: 'black',
    paddingHorizontal: spacing * 3,
    left: 10,
    top: spacing * 2.5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  backIconContainer: {
    position: 'absolute',
  
    left: 15,
    zIndex: 999,
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  commonText:{
    textAlign:'justify'
  },
  headerTitle:{
    textAlign: 'center',
    alignSelf: 'center',
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 17,
    top:5
  },
  header: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    height:HEIGHT/3.4
  },
  image: {
    height: height / 4,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
  }, logoButton: {
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
  },terms:{fontSize:11,color:"black",textAlign:"center"}
});
const color = '#E0E5EC';
const black = 'black';
const iconColor = '#999793';
const white = '#ffffff'
const arrayColor=['#dde2eb', '#cacfca','#dee3de','#dde2eb']

export {globalStyle, color, iconColor, black,HEIGHT,SIZE,spacing,width,height,white,arrayColor};
