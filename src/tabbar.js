import React, { Component } from 'react';
import { View } from 'react-native';
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
        renderIcon: () => <Svg width='30' height='30' svgXmlData={square} />,
        renderSelectedIcon: () => <Svg width='30' height='30' svgXmlData={selectSquare} />,
        onPress: () => this.setState({ selectedTab: 'square' }),
        component: <SquareIndex />
      },
      {
        selected: 'circle',
        title: '圈子',
        renderIcon: () => <Svg width='28' height='30' svgXmlData={circle} />,
        renderSelectedIcon: () => <Svg width='28' height='30' svgXmlData={selectCircle} />,
        onPress: () => this.setState({ selectedTab: 'circle' }),
        component: <CircleIndex />
      },
      {
        selected: 'create',
        renderIcon: () => <Svg width='45' height='40' svgXmlData={create}/>,
        renderSelectedIcon: () => <Svg width='45' height='40' svgXmlData={create}/>,
        onPress: () => {
          this.context.navigate('Create');
        },
        tabStyle: {
          alignItems: 'center',
          marginTop: 20,
        },
        // component: <CreateIndex />
      },
      {
        selected: 'message',
        title: '消息',
        renderIcon: () => <Svg width='25' height='30' svgXmlData={message} />,
        renderSelectedIcon: () => <Svg width='25' height='30' svgXmlData={selectMessage} />,
        onPress: () => this.setState({ selectedTab: 'message' }),
        component: <MessageIndex />
      },
      {
        selected: 'my',
        title: '我的',
        renderIcon: () => <Svg width='30' height='30' svgXmlData={my} />,
        renderSelectedIcon: () => <Svg width='30' height='30' svgXmlData={selectMy} />,
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
            alignItems: 'center',
          }}
          hidesTabTouch={true}
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
                  tabStyle={item.tabStyle}
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