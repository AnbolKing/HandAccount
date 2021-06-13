import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Svg from 'react-native-svg-uri';
import {
  create,
  my, selectMy,
  circle, selectCircle,
  message, selectMessage,
  square, selectSquare,
} from './res/iconSvg';
import SquareIndex from './pages/square/index';
import MyIndex from './pages/my/index';
import CircleIndex from './pages/circle/index';
// import CreateIndex from './pages/create/index';
import MessageIndex from './pages/message/index';
import { NavigationContext } from "@react-navigation/native";

class TabBar extends Component {
  static contextType = NavigationContext;
  state = {
    selectedTab: 'square',
    pages: [
      {
        selected: 'square',
        title: '广场',
        renderIcon: () => {
          return (
            // <Svg width='30' height='30' svgXmlData={square} />
            <Image 
              source={{uri: 'https://z3.ax1x.com/2021/06/13/2IoIrF.png'}}
              style={{
                width: 40,
                height: 40,
              }}
            />
          )
        },
        renderSelectedIcon: () => {
          return (
            // <Svg width='30' height='30' svgXmlData={selectSquare} />
            <Image 
              source={{uri: 'https://z3.ax1x.com/2021/06/13/2Io7VJ.png'}}
              style={{
                width: 40,
                height: 40,
              }}
            />
          )
        },
        onPress: () => this.setState({ selectedTab: 'square' }),
        component: <SquareIndex />
      },
      {
        selected: 'create',
        renderIcon: () => {
          return (
            // () => <Svg width='45' height='40' svgXmlData={create}/>
            <Image 
              source={{uri: 'https://z3.ax1x.com/2021/06/13/2Iob5R.png'}}
              style={{
                width: 50,
                height: 50,
              }}
            />
          )
        },
        renderSelectedIcon: () => {
          return (
            // () => <Svg width='45' height='40' svgXmlData={create}/>
            <Image 
              source={{uri: 'https://z3.ax1x.com/2021/06/13/2Iob5R.png'}}
              style={{
                width: 50,
                height: 50,
              }}
            />
          )
        },
        onPress: () => {
          this.context.navigate('Create');
        },
        // component: <CreateIndex />
      },
      {
        selected: 'my',
        title: '我的',
        renderIcon: () => {
          return (
            // <Svg width='30' height='30' svgXmlData={my} />
            <Image 
              source={{uri: 'https://z3.ax1x.com/2021/06/13/2Ioob4.png'}}
              style={{
                width: 40,
                height: 40,
              }}
            />
          )
        },
        renderSelectedIcon: () => {
          return (
            // <Svg width='30' height='30' svgXmlData={selectMy} />
            <Image 
              source={{uri: 'https://z3.ax1x.com/2021/06/13/2IoLP1.png'}}
              style={{
                width: 40,
                height: 40,
              }}
            />
          )
        },
        onPress: () => this.setState({ selectedTab: 'my' }),
        component: <MyIndex />
      }
    ]
  }
  render() {
    const { pages, selectedTab } = this.state;
    return (
      <View style={{flex: 1}}>
        <TabNavigator
          tabBarStyle={{
            height: 60,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          hidesTabTouch={true}
          tabBarShadowStyle={{
            display: 'none',
          }}
          sceneStyle={{
            display: 'none',
          }}
        >
          {
            pages.map((item, index) => {
              return (
                <TabNavigator.Item
                  key={index}
                  selected={selectedTab===item.selected}
                  title={item.title}
                  renderIcon={item.renderIcon}
                  renderSelectedIcon={item.renderSelectedIcon}
                  onPress={item.onPress}
                  selectedTitleStyle={{color: '#c863b5'}}
                  tabStyle={{
                    textAlign: 'center',
                    paddingTop: 5,
                  }}
                  titleStyle={{
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {item.component}
                </TabNavigator.Item>
              )
            })
          }
        </TabNavigator>
      </View>
    )
  }
}

export default TabBar;