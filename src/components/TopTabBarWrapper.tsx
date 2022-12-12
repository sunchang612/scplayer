/**
 * 自定义顶部组件 tabBar
 */

import React from 'react'
import { View, SafeAreaView } from 'react-native'
import {MaterialTopTabBar, MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

interface Props extends MaterialTopTabBarProps {
}

const TopTabBarWrapper = (props: Props) => {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  )
}

export default TopTabBarWrapper
