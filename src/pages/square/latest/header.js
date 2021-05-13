import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import {
  print,
  canlenda,
  like
} from '../../../res/iconSvg';
import Svg from 'react-native-svg-uri';

const styles = StyleSheet.create({
  wrapper: {
    height: 120, 
    width: '100%',
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FEE2F1',
  },
  swiper: {
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  buttonGroup: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center' ,
    backgroundColor: '#E8F4FF',   
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    fontSize: 15,
    color: '#737373',
    paddingTop: 10,
    paddingBottom: 5,
  }
})

class LatestHeader extends Component {
  render() {
    return (
      <View>
        {/* banner图 */}
        <View style={styles.wrapper}>
          <Swiper 
            style={styles.swiper}
            showsButtons={false}
            paginationStyle={{bottom: 3}}
            loop={true}  
            autoplay={true}
            autoplayTimeout={3}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 10,
                  height: 5,
                  borderRadius: 4,
                  marginLeft: 2,
                  marginRight: 2,
                }}
              ></View>
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#007aff',
                  width: 20,
                  height: 5,
                  borderRadius: 4,
                  marginLeft: 2,
                  marginRight: 2,
                }}
              ></View>
            }
          >
            <Image source={require('../../../res/imgs/swiper1.jpg')} style={styles.img}/>
            <Image source={require('../../../res/imgs/swiper2.jpg')} style={styles.img}/>
            <Image source={require('../../../res/imgs/swiper3.jpg')} style={styles.img}/>
          </Swiper>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Svg width='28' height='28' svgXmlData={print} />
            <Text style={styles.buttonText}>打印手账</Text>
          </View>
          <View style={styles.button}>
            <Svg width='28' height='28' svgXmlData={canlenda} />
            <Text style={styles.buttonText}>时光有品</Text>
          </View>
          <View style={styles.button}>
            <Svg width='28' height='28' svgXmlData={like} />
            <Text style={styles.buttonText}>手账测评</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default LatestHeader;