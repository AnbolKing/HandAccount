import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const RefreshHeader = () => {
  return (
    <View style={styles.header}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  )
}

export default RefreshHeader;