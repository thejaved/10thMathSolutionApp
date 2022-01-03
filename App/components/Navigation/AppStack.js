import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnswerScreen, ChapterDataScreen, Home, Profile} from '../../Screens';
import screenValue from '../../config/screenValue';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenValue.Home} component={Home} />
      <Stack.Screen
        name={screenValue.ChapterDataScreen}
        component={ChapterDataScreen}
      />
      <Stack.Screen name={screenValue.AnswerScreen} component={AnswerScreen} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenValue.Profile} component={Profile} />
    </Stack.Navigator>
  );
}

export {HomeStack, ProfileStack};
