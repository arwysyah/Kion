import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/navigations/index'
import {Provider }from 'react-redux'
import {store} from './src/redux/store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Index/>
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App