import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions, RefreshControl } from 'react-native';
import { Avatar } from 'react-native-elements'
import AutoResponsive from 'autoresponsive-react-native';
import Swiper from 'react-native-swiper';
import Svg from 'react-native-svg-uri';
import {
  print,
  canlenda,
  book,
  cost,
  like
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
    isRefreshing: false,
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
    this.setState(prev => {
      return {
        ...prev,
        page: prev.page+1,
        data: res.data,
      }
    })
  }
  getAutoResponsiveProps = () => {
    return {
      itemMargin: 8,
    };
  }
  renderChildren = () => {
    return this.state.data.map(item => {
      return (
        <View 
          style={{
            width: this.state.itemWidth,
            backgroundColor: '#fff',
            borderRadius: 8,
            height: this.state.itemWidth*item.width/item.height+100,
          }} 
          key={item.id}
        >
          {/* image */}
          <Image
            source={{uri: item.url}}
            style={{
              width: this.state.itemWidth,
              height: this.state.itemWidth*item.width/item.height,
              borderRadius: 8,
            }}
          ></Image>
          {/* desc */}
          <Text 
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 5,
              paddingRight: 5,

            }}
          >这是一个关于猫猫miao的手账</Text>
          {/* user likes */}
          <View
            style={{
              paddingLeft: 5,
              paddingRight: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Avatar 
                size="small"
                rounded
                source={{uri:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}}
              />
              <Text
                style={{
                  paddingLeft: 3
                }}
              >AnbolKing</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Svg 
                width='22' height='22' 
                svgXmlData={like}
              />
              <Text style={{paddingLeft: 2}}>10</Text>
            </View>
          </View>
        </View>
      )
    }, this)
  }
  handleRefresh = async () => {
    this.setState({
      isRefreshing: true,
    })
    let res = await get('https://api.thecatapi.com/v1/images/search', {
      params: {
        size: 'full',
        limit: 10,
        page: this.state.page,
      }
    });
    this.setState({
      isRefreshing: false,
      data: res.data
    })
  }
  handleRefreshControl = () => {
    return (
      <RefreshControl 
        refreshing={ this.state.isRefreshing }
        onRefresh = {() => this.handleRefresh()}
        title='loading'
      />
    )
  }
  handleScroll = async (event) => {
    let {x, y} = event.nativeEvent.contentOffset
    if(y > 600) {
      let res = await get('https://api.thecatapi.com/v1/images/search', {
        params: {
          size: 'full',
          limit: 10,
          page: this.state.page,
        }
      });
      let originData = this.state.data;
      let prevPage = this.state.page;
      originData = originData.concat(res.data);
      this.setState({
        data: originData,
        page: prevPage+1,
      })
    }
  }
  // throttle func
  throttle = (fn, delay) => {
    var prev = Date.now();
    return (...rest) => {
      let context = this;
      let args = rest;
      let now = Date.now();
      if(now-prev >= delay) {
        fn.apply(context, args);
        prev = Date.now();
      }
    }
  }
  componentDidMount() {
    this.handleInit();
  }
  render() {
    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={this.handleRefreshControl()}
          onScroll={this.throttle(this.handleScroll, 100)}
        >
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