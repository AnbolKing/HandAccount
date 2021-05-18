import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import PersonItem from '../../../components/personItem';
import Empty from '../../../components/Empty';
import Svg from 'react-native-svg-uri';
import { NavigationContext } from "@react-navigation/native";
import {
  leftArrow,
  setting,
} from '../../../res/iconSvg';

const data = new Array(10).fill({
  avatar: 'https://tva2.sinaimg.cn/large/9bd9b167ly1g1p9qayg3qj20b40b43z9.jpg',
  name: '鹤Alexander',
  fans: 34,
  account: 13,
  type: 'fans',
  isFocus: true,
})

class MyFans extends Component {
  static contextType = NavigationContext;
  handleBack = () => {
    this.context.goBack();
  }
  handleRenderBody = () => {
    if(data) {
      return data.map((item, index) => {
        return (
          <PersonItem 
            key={index}
            data={item}
          />
        )
      })
    }
    else {
      return (
        <Empty />
      )
    }
  }
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Header 
          title="我的粉丝"
          left={
            <Svg width='23' height='23' svgXmlData={leftArrow} />
          }
          right={
            <Svg width='23' height='23' svgXmlData={setting} />
          }
          leftEvent={this.handleBack}
        />
        <ScrollView
          style={{marginTop: 45, flex: 1,}}
          showsVerticalScrollIndicator={false}
        >
          {
            this.handleRenderBody()
          }
        </ScrollView>
      </View>
    )
  }
}

export default MyFans;