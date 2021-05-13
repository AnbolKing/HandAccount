import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShowItem from '../components/ShowItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
})

const JingXuan = () => {
  return (
    <View style={styles.container}>
      <ShowItem />
    </View>
  )
}

export default JingXuan;