import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, findNodeHandle } from 'react-native';
import Svg from 'react-native-svg-uri';
import AutoResponsive from 'autoresponsive-react-native';
import { Avatar } from 'react-native-elements'
import {
  like
} from '../res/iconSvg';
import { NavigationContext } from "@react-navigation/native";
import { BlurView } from 'react-native-blur';
import {
  draft,
} from '../res/iconSvg';

const styles = StyleSheet.create({
  waterfull: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: 'center',
    flex: 1,
  },
})

class Masonry extends Component {
  static contextType = NavigationContext;
  state = {
    data: [],
    itemWidth: (Dimensions.get('window').width-27)/2,
    imgRef: null,
  }
  getAutoResponsiveProps = () => {
    return {
      itemMargin: 8,
    };
  }
  handleDetail = (url) => {
    this.context.navigate('Detail', {
      url,
    })
  }
  handleImageLoaded = () => {
    console.log('load end');
    setTimeout(() => {
      this.setState({ 
        imgRef: findNodeHandle(this.backgroundImage) 
      })
    }, 0)
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
            justifyContent: 'center',
            alignItems: 'center',
          }} 
          key={item.id}
        >
          {/* image */}
          {
            item.isDraft ? (
              <TouchableOpacity 
                activeOpacity={1} 
                onPress={() => this.handleDetail(item.url)}
                style={{
                  position: 'relative',
                  width: this.state.itemWidth,
                  height: this.state.itemWidth*item.width/item.height,
                  borderRadius: 8,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  ref={img => { this.backgroundImage = img }}
                  source={{uri: item.url}}
                  style={{
                    width: this.state.itemWidth,
                    height: this.state.itemWidth*item.width/item.height,
                    position: 'absolute',
                    top: 0, left: 0,
                  }}
                  onLoadEnd={this.handleImageLoaded}
                ></Image>
                <BlurView
                  viewRef={this.state.imgRef}
                  blurType="light"
                  blurAmount={5}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    zIndex: 9,
                    width: this.state.itemWidth,
                    height: this.state.itemWidth*item.width/item.height,
                  }}
                ></BlurView>
                <View style={{justifyContent: 'center', alignItems: 'center', zIndex: 10,}}>
                  <Svg width='35' height='35' svgXmlData={draft} />
                  <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold', marginTop: 10}}>草稿箱</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.9} onPress={() => this.handleDetail(item.url)}>
                <Image
                  source={{uri: item.url}}
                  style={{
                    width: this.state.itemWidth,
                    height: this.state.itemWidth*item.width/item.height,
                    borderRadius: 8,
                  }}
                ></Image>
              </TouchableOpacity>
            )
          }
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
          {/* <View
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
          </View> */}
        </View>
      )
    }, this)
  }
  componentWillReceiveProps(nextProps) {
    let self = this;
    self.setState({
      data: nextProps.data
    })
  }
  render() {
    return (
      <View style={styles.waterfull}>  
        <AutoResponsive {...this.getAutoResponsiveProps()} >
          {
            this.renderChildren()
          }
        </AutoResponsive>
      </View>
    )
  }
}

export default Masonry