import React, { Component } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Header from '../../components/Header';
import FlexButton from '../../components/FlexButton';
import ListItem from '../../components/ListItem';
import Empty from '../../components/Empty';
import {
  setting,
  likeAcol,
  newFollow,
  commentAat,
} from '../../res/iconSvg';
import Svg from 'react-native-svg-uri';

const flxeButton = [
  {
    icon: <Svg width='30' height='30' svgXmlData={likeAcol} />,
    text: '赞和收藏',
    style: {
      backgroundColor: '#FEE0E0',
    }
  },
  {
    icon: <Svg width='30' height='30' svgXmlData={newFollow} />,
    text: '新增关注',
    style: {
      backgroundColor: '#E6EFFE',
    }
  },
  {
    icon: <Svg width='30' height='30' svgXmlData={commentAat} />,
    text: '评论和@',
    style: {
      backgroundColor: '#D5F5E8',
    }
  }
]

const data = new Array(10).fill({
  avatar: 'https://tva2.sinaimg.cn/large/9bd9b167ly1g1p9qayg3qj20b40b43z9.jpg',
  title: '推送消息',
  content: '五一背景旅游攻略💡',
  date: '05-03',
})

class MessageIndex extends Component {
  state = {
    isRefreshing: false,
  }
  handleRenderBody = () => {
    if(data) {
      return data.map((item, index) => {
        return (
          <ListItem 
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
  handleRefresh = () => {
    this.setState({
      isRefreshing: true,
    })
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      })
    }, 2000)
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
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Header 
          title="消息"
          right={
            <Svg width='23' height='23' svgXmlData={setting} />
          }
        />
        <ScrollView 
          style={{marginTop: 45, flex: 1,}}
          showsVerticalScrollIndicator={false}
          refreshControl={this.handleRefreshControl()}
          onScroll={this.throttle(this.handleScroll, 100)}
        >
          <FlexButton 
            data={flxeButton}
            bottomLine={true}
          />
          {
            this.handleRenderBody()
          }
        </ScrollView>
      </View>
    )
  }
}

export default MessageIndex