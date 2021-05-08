import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  Avatar,
} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 170,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  info: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  desc: {
    paddingRight: 20,
    alignItems: 'center',
  },
  num: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  word: {
    fontSize: 13,
    color: '#000',
    fontWeight: '400'
  },
  bg: {
    flex: 1,
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
  },
})

class MyHeader extends Component {
  render() {
    return (
      <>
      
      <View style={styles.container}>
        <View style={styles.top}>
          <Avatar 
            size='large'
            rounded
            source={{uri:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}}
          />
        </View>
        <View style={styles.middle}>
          <View style={styles.info}>
            <Text 
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                paddingTop: 5,
              }}
            >
              中华小子
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                paddingTop: 2,
              }}
            >
              不念过往，不惧将来
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.desc}>
            <Text style={styles.num}>118</Text>
            <Text style={styles.word}>获赞</Text>
          </View>
          <View style={styles.desc}>
            <Text style={styles.num}>287</Text>
            <Text style={styles.word}>关注</Text>
          </View>
          <View style={styles.desc}>
            <Text style={styles.num}>18</Text>
            <Text style={styles.word}>粉丝</Text>
          </View>
        </View>
      </View>
      </>
    )
  }
}

export default MyHeader;