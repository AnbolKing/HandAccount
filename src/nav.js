import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './tabbar';
import Example from './demo';
import MySetting from './pages/my/setting/index';
import MyFans from './pages/my/fans/index';
import myFocus from './pages/my/focus/index';
import Camera from './components/Camera';
import Finger from './components/Finger';
import Login from './pages/account/login';
import AdPage from './pages/ad/ad';
import CreateIndex from './pages/create/index';

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
          <Stack.Screen name="Finger" component={Finger} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AdPage" component={AdPage} />
          <Stack.Screen name="Create" component={CreateIndex} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Nav;