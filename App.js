import React from 'react'
import {View,Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigations/BottomNavigation';
import SlideNavigation from './src/navigations/SlideNavigation'

const App =()=>{
  return(
<NavigationContainer>

  <SlideNavigation/>
  </NavigationContainer>

  )
}
export default App