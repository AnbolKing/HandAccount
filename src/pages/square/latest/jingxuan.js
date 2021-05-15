import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShowItem from '../components/ShowItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '100%',
    flex: 1,
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