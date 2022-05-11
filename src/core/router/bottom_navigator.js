import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ScanScreen, ProfileScreen } from '../../screens';

import { LocationIcon, SearchIcon, UserIcon } from '../assets';

import { styles, tabBarStyle } from '../../widgets/bottom_navigator/styles';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={LocationIcon} style={styles.icon(focused)} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={SearchIcon} style={styles.icon(focused)} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={UserIcon} style={styles.icon(focused)} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
