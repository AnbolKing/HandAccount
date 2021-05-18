import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg from 'react-native-svg-uri';
import {
  setting,
  rightArrow,
} from '../res/iconSvg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    paddingBottom: 20,
    paddingTop: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EAEAEA',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 50,
  },
  title: {
    justifyContent: 'center',
    fontSize: 17,
    color: '#000',
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  word: {
    fontSize: 15,
    color: '#000',
  }
})

const SetItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        { props.preIcon ? props.preIcon : null }
      </View>
      <Text style={styles.title}>
        { props.title ? props.title : null }
      </Text>
      <View style={styles.info}>
        <Text style={styles.word}>{props.content}</Text>
        <Svg width='26' height='26' svgXmlData={rightArrow} />
      </View>
    </View>
  )
}

export default SetItem;