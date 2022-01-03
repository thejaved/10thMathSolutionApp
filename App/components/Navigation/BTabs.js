import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, ProfileStack} from './AppStack';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import appColors from '../../config/appColors';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: appColors.secondary,
        tabBarInactiveTintColor: appColors.white,
      }}>
      <Tab.Screen
        name="Home Stack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="apps" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile Stack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    elevation: 0,
    borderTopColor: 'transparent',
    backgroundColor: appColors.darkOne,
  },
});

export default MyTabs;
