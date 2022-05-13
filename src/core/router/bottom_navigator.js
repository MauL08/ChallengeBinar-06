import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ScanScreen } from '../../screens';

import { LocationIcon, ScanIcon } from '../assets';

import { styles, tabBarStyle } from '../../widgets/bottom_navigator/styles';

const Tab = createBottomTabNavigator();

const MainTabs = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        initialParams={{ email: route.params.email }}
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
              <Image source={ScanIcon} style={styles.icon(focused)} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
