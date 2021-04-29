import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './tabbar';

const Stack = createStackNavigator();

class Nav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="TabBar">
          <Stack.Screen name="TabBar" component={TabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Nav;