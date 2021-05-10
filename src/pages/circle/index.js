import React, { Component } from 'react';
import { View } from 'react-native';
import CircleHeader from './components/header';
import CircleBody from './components/body';

class CircleIndex extends Component {
  render() {
    return (
      <View>
        <CircleHeader />
        <CircleBody />
      </View>
    )
  }
}

export default CircleIndex;