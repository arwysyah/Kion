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
    fontSize: 26,
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'absolute',
    marginTop: 30,
    left: 15,
    zIndex: 9999,
    width: 30,
    height: 30,
    borderRadius: 200,
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
    backgroundColor: '#FFFFFF',
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
});
const color = '#E0E5EC';
const black = 'black';
const iconColor = '#999793';
const white = '#ffffff'

export {globalStyle, color, iconColor, black,HEIGHT,SIZE,spacing,width,height,white};
