import React from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import Svg from 'react-native-svg-uri';
import {
  collSetting,
  suo
} from '../res/iconSvg';

const itemWidth = (Dimensions.get('window').width)/2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 7,
    width: itemWidth,
    height: 260,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  iconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#BCA8A7',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  desc: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingLeft: 10,
    paddingTop: 12,
    paddingBottom: 8,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  detail: {
    fontSize: 10,
  },
  icon: {
    alignSelf: 'flex-end',
    paddingRight: 3,
  }
})

const AccountBook = (props) => {
  const { imgUrl, title, num } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{uri: imgUrl}}
        resizeMode='cover'
        imageStyle={{borderRadius:7}}
      >
        <View style={styles.iconContainer}>
          <Svg width='15' height='15' svgXmlData={collSetting}/>
        </View>
        <View style={styles.desc}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.detail}>{num}篇手账 {props.private ? '私密' : '公开'}</Text>
          </View>
          {
            props.private ? <Svg width='20' height='20' svgXmlData={suo} style={styles.icon}/> : null
          }
        </View>
      </ImageBackground>
    </View>
  )
}

export default AccountBook;