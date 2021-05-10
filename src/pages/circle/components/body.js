import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CircleItem from './item';

class CircleBody extends Component {
  render() {
    const styles = StyleSheet.create({
      bodyContainer: {
        flex: 1,
        marginTop: 50,
      }
    })
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bodyContainer}>
          <CircleItem />
          <CircleItem />
          <CircleItem />
        </View>
      </ScrollView>
    )
  }
}

export default CircleBody;