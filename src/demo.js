import React, { Component } from 'react';
import { View, Image, Text, findNodeHandle, StyleSheet } from 'react-native';
import { BlurView } from 'react-native-blur';
 
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }
 
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Image
          ref={(img) => { this.backgroundImage = img; }}
          source={{uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs13.sinaimg.cn%2Fbmiddle%2F4d049168cc5e11e7fb13c&refer=http%3A%2F%2Fs13.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626009984&t=502f8fd4fc598bc3a8dda1da6113c408'}}
          style={styles.absolute}
          onLoadEnd={this.imageLoaded.bind(this)}
        />
        <BlurView
          style={styles.absolute}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={10}
        />
        <Text>Hi, I am some unblurred text</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});