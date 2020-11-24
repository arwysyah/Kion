import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;
const TOP = 24;
const color = '#E0E5EC';
const black = 'black';
const iconColor = '#999793';
const white = '#ffffff';
const arrayColor = ['#dde2eb', '#cacfca', '#dee3de', '#dde2eb'];
const backgroundColor = '#cacfca';
const globalStyle = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  icon: {
    color: '#E0E5EC',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: HEIGHT,
    borderRadius: 8,
  },
  cardPart: {
    backgroundColor: '#ffffff',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT / 2,
    borderRadius: 8,
    // width:width/1.2,
    padding: spacing * 2,
  },
  text: {
    fontSize: 15,
    color: 'black',
    paddingLeft: spacing + 10,
    top: spacing * 2.5,
    // justifyContent:'c'
  },
  textUsual: {
    fontSize: 15,

    textAlign: 'center',
    // justifyContent:'c'
  },
  smallText: {
    fontSize: 12,
    color: black,
  },
  titleWrite: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
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
  commonIcon: {
    position: 'absolute',

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
  commonText: {
    textAlign: 'justify',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 17,
    top: 5,
  },
  header: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor,
    // padding: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
    height: HEIGHT / 3.4,
  },
  image: {
    height: height / 4,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
  },
  logoButton: {
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
  terms: {fontSize: 11, color: 'black', textAlign: 'center'},
  profilImage: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 8,
    padding: 10,
    left: 2.4,
    top: 2,
  },
  profilImageBack: {
    width: width / 3.8,
    height: width / 3.8,
    borderRadius: width / 7.6,
    // padding: 10,
    backgroundColor: '#FFFFFF',
  },
  profilImageBigger: {
    width: width / 3,
    height: width / 3,
    borderRadius: width / 6,
    padding: 10,
    top: 2,
    left: 2,
  },
  BackprofileImage: {
    width: width / 2.9,
    height: width / 2.9,
    borderRadius: width / 5.6,
    // padding: 10,
    backgroundColor: '#ffffff',
  },
  saveButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  saveButton: {
    borderRadius: 50,
    width: 120,
    height: 40,
    backgroundColor: '#ffff',
    borderColor: '#D23B4B',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    height: 200,
  },
  profileInfoTouchable: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  profileInfoText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  closeButtonModal: {
    backgroundColor: 'white',
    width: 30,
    borderRadius: 14,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    top: -5,
    marginLeft: 300,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigTextInput: {
    height: height,
    backgroundColor,
    borderColor: 'green',
    top: height / 15,
    paddingLeft: spacing,
    paddingRight: spacing,
  },
});

export {
  globalStyle,
  color,
  iconColor,
  black,
  HEIGHT,
  SIZE,
  spacing,
  width,
  height,
  white,
  arrayColor,
  TOP,
  backgroundColor,
};
