import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HandAccount extends Component {
  state = {
    data: new Array(20).fill({}),
  }
  render() {
    const { data } = this.state;
    return (
      data.map((o, i) => (
        <View style={{ marginVertical: 2, padding: 10, borderWidth: 1, backgroundColor: '#fff' }}>
            <Text>{'acc => ' + i}</Text>
        </View>
      ))
    );
  }
}

export default HandAccount