import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Like extends Component {
  state = {
    data: new Array(20).fill({}),
  }
  render() {
    const { data } = this.state;
    return (
      data.map((o, i) => (
        <View style={{ marginVertical: 2, padding: 10, borderWidth: 1 }}>
            <Text>{'like => ' + i}</Text>
        </View>
      ))
    );
  }
}

export default Like