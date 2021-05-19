import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg-uri';
import {
  modal_account,
  modal_wujiao,
  modal_love,
} from '../../../res/iconSvg';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
  },  
  title: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EAEAEA',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  word: {
    fontSize: 20,
    color: '#000'
  },
  content: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 18,
  },
  iconContainer: {
    padding: 7,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    paddingLeft: 17,
    color: '#9A9A9A'
  },
  num: {
    color: '#272727',
    fontSize: 16,
    paddingLeft: 5,
  },
  button: {
    backgroundColor: '#FF2442',
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center'
  },
  know: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center'
  }
})

const Modal = (props) => {
  const { close } = props;
  const handleClose = () => {
    if(close) {
      close();
    }
  }
  return (
    <View style={styles.modalContainer}>
      <View style={styles.title}>
        <Text style={styles.word}>获赞与收藏</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={{
            ...styles.iconContainer,
            backgroundColor: '#5794E2',
          }}>
            <Svg width='20' height='20' svgXmlData={modal_account} />
          </View>
          <Text style={styles.desc}>当前发布手账数</Text>
          <Text style={styles.num}>188</Text>
        </View>
        <View style={styles.item}>
          <View style={{
            ...styles.iconContainer,
            backgroundColor: '#FD2542',
          }}>
            <Svg width='20' height='20' svgXmlData={modal_love} />
          </View>
          <Text style={styles.desc}>当前发布手账数</Text>
          <Text style={styles.num}>188</Text>
        </View>
        <View style={styles.item}>
          <View style={{
            ...styles.iconContainer,
            backgroundColor: '#FDBC55',
          }}>
            <Svg width='20' height='20' svgXmlData={modal_wujiao} />
          </View>
          <Text style={styles.desc}>当前发布手账数</Text>
          <Text style={styles.num}>188</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleClose} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.know}>我知道了</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Modal;