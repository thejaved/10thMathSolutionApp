import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import BTabs from './App/components/Navigation/BTabs';
import appColors from './App/config/appColors';
import SilderScreen from './App/Screens/SilderScreen/SilderScreen';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={appColors.darkOne} />
      <NavigationContainer>
        <BTabs />
      </NavigationContainer>
    </>
  );
};

export default App;
