import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './tabbar';
import Example from './demo';

const Stack = createStackNavigator();

class Nav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="TabBar">
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="Example" component={Example} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Nav;