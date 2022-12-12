import React, { useEffect } from 'react';
import {View} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import TopTabBarWrapper from '../components/TopTabBarWrapper';
import HomeScreen from '../pages/Home/Index';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = (props) => {
  const renderTabbar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: '',
      headerTransparent: true, // 设置标题栏 为透明的（隐藏标题栏）
    });
  }, [])


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: 'tomato',
        tabBarIndicatorStyle: {
          backgroundColor: 'tomato',
        },
      }}
      tabBar={renderTabbar}
		>
      <Tab.Screen
        name="TUIJIAN"
        component={HomeScreen}
        options={{tabBarLabel: '推荐'}}></Tab.Screen>
      {/* <Tab.Screen name='Home2' component={HomeScreen}></Tab.Screen> */}
      {/* <Tab.Screen name='Home3' component={HomeScreen}></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default HomeTabs;
