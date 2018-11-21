import React from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import ScreenA from './screens/screenA';
import ScreenB from './screens/screenB';

import TabA from './screens/tabA';
import TabB from './screens/tabB';

const screens = createStackNavigator({
  'ScreenA': ScreenA,
  'ScreenB': ScreenB,
}, {
  initialRouteName: 'ScreenA',
});

const tabs = createMaterialTopTabNavigator({
  'TabA': TabA,
  'TabB': TabB,
});


const drawer = createDrawerNavigator({
  'Screens': screens,
  'Tabs': tabs,
})

export default createAppContainer(drawer);


