import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'
const {height, width} = Dimensions.get('window');
const SPACING = 10;
const SIZE = width * 0.62;
const SPACER = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;

export {SPACING,SIZE,SPACER,BACKDROPHEIGHT}