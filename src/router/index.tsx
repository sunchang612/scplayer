import React, { useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


import MyPage from '../pages/My';
import HomeTabs from './HomeTabs';
import IconFont from '../iconfont';
import { RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

interface Props {
  navigation: any;
  route: any;
}

const RouterScreen = (props: Props) => {

  useEffect(() => {
    console.log('router =========>', props.route)
    // if (props.route.name === 'Home') {
    // }
  }, [props.navigation, props.route]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return '';
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Index"
        component={HomeTabs}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color, size}) => (
            <IconFont name="yinlemusic215" size={size} color={color}></IconFont>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="My"
        component={MyPage}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <IconFont name="wode" size={size} color={color}></IconFont>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default RouterScreen;
