import React from 'react'
import {View,Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigations/BottomNavigation';

const App =()=>{
  return(
<NavigationContainer>

  <BottomNavigation/>
  </NavigationContainer>

  )
}
export default App