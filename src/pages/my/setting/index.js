import React, { Component } from 'react';
import { View, StatusBar, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
  Avatar,
  BottomSheet,
  ListItem,
} from 'react-native-elements';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
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

  },
  maskStyle: {
    backgroundColor: 'rgba(0.5, 0.25, 0, 0.5)',
  }
})

class MySetting extends Component {
  static contextType = NavigationContext;
  state = {
    isVisible: false,
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
    ],
    bottomList: [
      {
        title: '从手机图库中选择',
        onPress: async () => {
          this.handleFromLib()
          this.setState({
            isVisible: false,
          })
        },
        id: '376rci_uiwec',
        containerStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }
      },
      {
        title: '使用相机拍摄',
        onPress: () => {
          this.handleFromCarema();
          this.setState({
            isVisible: false,
          })
        },
        id: '6278ejf_inv'
      },
      {
        title: '取消',
        onPress: () => {
          this.handleClose();
        },
        id: '46738dhf_gy',
        titleStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          color: 'red',
        }
      }
    ]
  }
  handleFromCarema = () => {
    launchCamera(
      {
        cameraType: 'front',
      },
      (response) => {
        if(response.didCancel) {
          return ;
        }
        let avatarUrl = response.assets[0].uri;
        this.setState({avatar: avatarUrl});
      },
    )
  }
  handleFromLib = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if(response.didCancel) {
          return ;
        }
        let avatarUrl = response.assets[0].uri;
        this.setState({avatar: avatarUrl});
      },
    )
  }
  handleChoseAvatar = async () => {
    this.setState({
      isVisible: true,
    })
  }
  handleClose = () => {
    this.setState({
      isVisible: false,
    })
  }
  handleBack = () => {
    this.context.goBack();
  }
  render() {
    const { avatar, data, bottomList, isVisible } = this.state;
    return (
      <>
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
          <TouchableWithoutFeedback onPress={this.handleClose}>
            <BottomSheet 
              containerStyle={styles.maskStyle}
              isVisible={isVisible}
              onPress={this.handleClose}
              modalProps={{
                onRequestClose: () => {
                  this.handleClose();
                }
              }}
            >
              {
                bottomList.map(item => {
                  return (
                    <ListItem 
                      key={item.id} 
                      containerStyle={{
                        borderBottomColor: '#eee',
                        borderBottomWidth: 1,
                        height: 60,
                        ...item.containerStyle,
                      }} 
                      onPress={item.onPress}
                    >
                      <ListItem.Content>
                        <ListItem.Title 
                          style={item.titleStyle}
                        >
                          {item.title}
                        </ListItem.Title>
                      </ListItem.Content>
                    </ListItem>
                  )
                })
              }
            </BottomSheet>
          </TouchableWithoutFeedback>
        </View>
      </>
    )
  }
}

export default MySetting;