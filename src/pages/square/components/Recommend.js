import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Recommend extends Component {
  state = {
    entries: [
      { title: "安徒生童话" },
      { title: "格林童话" },
      { title: "我的童话"}
    ],

  }
  render() {
    return (
      <View>
        <Text>message</Text>
      </View>
    )
  }
}

export default Recommend