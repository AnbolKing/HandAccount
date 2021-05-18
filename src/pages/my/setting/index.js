import React, { Component } from 'react';
import { View, StatusBar, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header';
import Svg from 'react-native-svg-uri';
import {
  leftArrow,
  setting,
  nickname,
  id,
  sex,
  birthday,
  local,
  desc,
  school,
} from '../../../res/iconSvg';
import {
  Avatar
} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { NavigationContext } from "@react-navigation/native";
import SetItem from '../../../components/setItem';

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    paddingTop: 10,
    fontSize: 10,
    color: '#353334'
  },
  infoContainer: {

  }
})

class MySetting extends Component {
  static contextType = NavigationContext;
  state = {
    avatar: 'https://tva2.sinaimg.cn/large/9bd9b167ly1g1p9qayg3qj20b40b43z9.jpg',
    data: [
      {
        preIcon: <Svg width='26' height='26' svgXmlData={nickname} />,
        title: '昵称',
        content: '中华小子',
      },
      {
        preIcon: <Svg width='26' height='26' svgXmlData={id} />,
        title: '站内号',
        content: '20200518',
      },
      {
        preIcon: <Svg width='26' height='26' svgXmlData={sex} />,
        title: '性别',
        content: '男',
      },
      {
        preIcon: <Svg width='26' height='26' svgXmlData={birthday} />,
        title: '生日',
        content: '1999-09-28',
      },
      {
        preIcon: <Svg width='26' height='26' svgXmlData={local} />,
        title: '地区',
        content: '中国',
      },
      {
        preIcon: <Svg width='26' height='26' svgXmlData={desc} />,
        title: '个人简介',
        content: '不念过往，不惧将来',
      },
      {
        preIcon: <Svg width='26' height='26' svgXmlData={school} />,
        title: '学校',
        content: '南昌大学',
      },
    ]
  }
  handleChoseAvatar = async () => {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    });
    this.setState({
      avatar: image.path,
    })
  }
  handleBack = () => {
    this.context.goBack();
  }
  render() {
    const { avatar, data } = this.state;
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <Header 
          title="修改资料"
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
          <View style={styles.avatarContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.handleChoseAvatar}>
              <Avatar
                rounded
                source={{
                  uri: avatar,
                }}
                size='large'
              />
              </TouchableOpacity>
            <Text style={styles.avatarText}>点击更换头像</Text>
          </View>
          <View style={styles.infoContainer}>
            {
              data.map((item, index) => {
                return (
                  <SetItem 
                    key={index}
                    preIcon={item.preIcon}
                    title={item.title}
                    content={item.content}
                  />
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default MySetting;