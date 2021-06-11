import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Svg from 'react-native-svg-uri';
import {
  blackLeftArrow,
} from '../res/iconSvg';
import { NavigationContext } from "@react-navigation/native";

const styles = StyleSheet.create({
  detailContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height*0.88,
  },
  desc: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 13,
    marginTop: 10,
  },
  date: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dateYear: {
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 15,
  },
  dateTime: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999,
  }
})


class Detail extends Component {
  static contextType = NavigationContext;
  handleBack = () => {
    this.context.goBack();
  }
  componentDidMount() {
    console.log(this.props.route.params.url);
  }
  render() {
    return (
      <View style={styles.detailContainer}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <TouchableOpacity style={styles.icon} activeOpacity={0.9} onPress={this.handleBack}>
          <Svg width='25' height='25' svgXmlData={blackLeftArrow}/>
        </TouchableOpacity>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{uri: this.props.route.params.url || 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013be25733e6be6ac72526319242ea.png%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625995124&t=49e8718bd75d6a2f8659f1316fbec1d4'}}
        ></Image>
        <Text style={styles.desc}>
          王子安好帅王子安是大帅哥王子安是物联网最帅的王子安是信息工程学院最帅的王子安是南昌大学最帅的！
        </Text>
        <View style={styles.date}>
          <Text style={styles.dateYear}>
            2021-6-10 
          </Text>
          <Text style={styles.dateTime}>
            13 : 00
          </Text>
        </View>
      </View>
    )
  }  
}

export default Detail;