import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './tabbar';
import Example from './demo';
import MySetting from './pages/my/setting/index';
import MyFans from './pages/my/fans/index';
import myFocus from './pages/my/focus/index';
import Camera from './components/Camera';

const Stack = createStackNavigator();

class Nav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="TabBar">
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="Example" component={Example} />
          <Stack.Screen name="MySetting" component={MySetting} />
          <Stack.Screen name="MyFans" component={MyFans} />
          <Stack.Screen name="MyFocus" component={myFocus} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Nav;