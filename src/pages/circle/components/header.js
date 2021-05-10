import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  circleHeader: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '10%',
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '80%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  word: {
    fontSize: 11,
    color: '#383838'
  },
  searchBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    justifyContent: 'flex-start'
  }
})

const CircleHeader = () => {
  return (
    <View style={styles.circleHeader}>
      <View style={styles.slide}>
        <Icon
          name="bell-o"
          size={17}
          color="#333333"
        />
        <Text style={styles.word}>通知</Text>
      </View>
      <View style={styles.search}>
        <View style={styles.searchBar}>
          <Icon
            name="search"
            size={15}
            color="#939393"
            style={{
              flexBasis: '10%',
            }}
          />
          <Text style={{
            color: '#939393',
            fontSize: 13,
          }}>大家都在搜“夏日限定手账”</Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Icon
          name="bars"
          size={17}
          color="#333333"
        />
        <Text style={styles.word}>更多</Text>
      </View>
   </View> 
  )
}

export default CircleHeader;