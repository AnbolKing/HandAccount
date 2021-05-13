import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 16,
    color: '#A0A09E',
  },
  arrow: {
    fontSize: 13,
    color: '#A0A09E',
  }
})

const ShowItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>最新贴纸</Text>
        <Text style={styles.arrow}>更多 &gt;</Text>
      </View>
      <View style={styles.images}>
        {/* <FlatList 
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        /> */}
      </View>
    </View>
  )
}

export default ShowItem;