import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from 'react-native';
import AutoResponsive from 'autoresponsive-react-native';
import Swiper from 'react-native-swiper';
import Svg from 'react-native-svg-uri';
import {
  print,
  canlenda,
  book,
  cost,
} from '../../../res/iconSvg';
import { get } from '../../../utils/request';

const styles = StyleSheet.create({
  wrapper: {
    height: 170, 
    width: '100%',
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  swiper: {
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 170,
    borderRadius: 10,
  },
  waterfull: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    justifyContent: 'center',
    flex: 1,
  }
})

class Recommend extends Component {
  state = {
    screenWidth: Dimensions.get('window').width,
    itemWidth: (Dimensions.get('window').width-27)/2,
    grid: [
      {
        icon: print,
        text: '打印手账'
      },
      {
        icon: cost,
        text: '手账达人',
      },
      {
        icon: canlenda,
        text: '每日签到',
      },
      {
        icon: book,
        text: '手账攻略',
      }
    ],
    page: 1,
    data: [],
    hasMore: true,
    refreshLoad: false,
    moreLoad: false,
    array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  }
  handleRenderGrid = () => {
    return this.state.grid.map((item, index) => {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={index}
        >
          <Svg width='26' height='26' svgXmlData={item.icon} />
          <Text style={{fontSize: 12, color: '#675552', marginTop: 10}}>{item.text}</Text>
        </View>
      )
    })
  }
  handleInit = async () => {
    const { page } = this.state;
    let res = await get('https://api.thecatapi.com/v1/images/search', {
      params: {
        size: 'full',
        limit: 10,
        page,
      }
    });
    console.log(res);
    this.setState(prev => {
      return {
        ...prev,
        page: prev.page+1,
        data: prev.data.push(res.data),
      }
    })
  }
  getAutoResponsiveProps = () => {
    return {
      itemMargin: 8,
    };
  }
  getChildrenStyle = () => {
    return {
      width: this.state.itemWidth,
      height: parseInt(Math.random() * 20 + 12) * 10,
      backgroundColor: 'rgb(92, 67, 155)',
      borderRadius: 8,
    };
  }
  renderChildren = () => {
    return this.state.array.map(item => {
      return (
        <View style={this.getChildrenStyle()} key={item.id}>
          <Text style={styles.text}>{item.id}</Text>
        </View>
      );
    }, this);
  }
  async componentDidMount() {
    this.handleInit();
  }
  render() {
    return (
      <>
        <ScrollView>
          <View style={{flex: 1}}>
            {/* banner图 */}
            <View style={styles.wrapper}>
              <Swiper 
                style={styles.swiper}
                showsButtons={false}
                paginationStyle={{bottom: 15}}
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
            {/* grid 图标 */}
            <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                marginRight: 10,
                height: 90,
                backgroundColor: '#fff',
                borderRadius: 10,
                transform: [
                  {
                    translateY: -10
                  }
                ]
              }}
            >
              {
                this.handleRenderGrid()
              }
            </View>
            {/* waterfull 瀑布流 */}
            <View style={styles.waterfull}>  
              <AutoResponsive {...this.getAutoResponsiveProps()} >
                {
                  this.renderChildren()
                }
              </AutoResponsive>
            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}

export default Recommend