import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContext } from "@react-navigation/native";
import { 
  Button,
  ListItem,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg from 'react-native-svg-uri';
import {
  Avatar,
  BottomSheet
} from 'react-native-elements';
import {
  jinbi,
  jifen,
  huiyuan,
} from '../../../res/iconSvg';
import LineButton from '../../../components/LineButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 170,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lib: {
    alignSelf: 'flex-start',
    padding: 15,
    // backgroundColor: 'red',
    width: '50%',
  },
  set: {
    alignSelf: 'flex-start',
    paddingTop: 10,
  },
  tabs: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'blue'
  },
  tabItem: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#eee',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemWord: {
    fontSize: 12,
  },
  middle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingLeft: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    // backgroundColor: 'red',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    width: '30%',
    // backgroundColor: 'blue',
  },
  label: {
    paddingLeft: 10,
    flexDirection: 'row',
    width: '70%',
    paddingRight: 10,
    // backgroundColor: 'green',
  },
  item: {
    marginRight: 10,
  },
  desc: {
    paddingRight: 20,
    alignItems: 'center',
  },
  num: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  word: {
    fontSize: 13,
    color: '#000',
    fontWeight: '400'
  },
  bg: {
    flex: 1,
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: 'red',
  },
  bottomLeft: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: 'blue',
  },
  bottomRight: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  buttonStyle: {
    borderRadius: 30,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#FFF8DC',
    marginBottom: 5,
  },
  maskStyle: {
    backgroundColor: 'rgba(0.5, 0.25, 0, 0.5)',
  },
})

class MyHeader extends Component {
  static contextType=NavigationContext;
  state = {
    isVisible: false,
    bottomList: [
      {
        title: '从手机图库中选择',
        onPress: () => {
          alert('手机图库');
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
          alert('调用摄像头');
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
  handleChangeAnatar = () => {
    this.setState({
      isVisible: true,
    })
  }
  handleClose = () => {
    this.setState({
      isVisible: false,
    })
  }
  render() {
    const { isVisible, bottomList } = this.state; 
    return (
      <>
        <View style={styles.container}>
          <View style={styles.top}>
            <Avatar 
              onPress={this.handleChangeAnatar}
              size='large'
              rounded
              source={{uri:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}}
            />
            <View style={styles.lib}>
              <Text style={styles.word}>站内号：272344341</Text>
              <View style={styles.tabs}>
                <View style={styles.tabItem}>
                  <Text style={styles.itemWord}>♂ 男</Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={styles.itemWord}>天秤座</Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={styles.itemWord}>南昌</Text>
                </View>
              </View>
            </View>
            <View style={styles.set}>
              <Button
                icon={
                  <Icon
                    name="cog"
                    size={15}
                    color="black"
                  />
                }
                title="编辑资料"
                titleStyle={{
                  fontSize: 12,
                  color: '#000',
                }}
                buttonStyle={{
                  ...styles.buttonStyle
                }}
                onPress={() => this.context.navigate("MySetting")}
              />
              <Button
                icon={
                  <Icon
                    name="plus"
                    size={15}
                    color="black"
                  />
                }
                title="添加好友"
                titleStyle={{
                  fontSize: 12,
                  color: '#000',
                }}
                buttonStyle={{
                  ...styles.buttonStyle
                }}
              />
            </View>
          </View>
          <View style={styles.middle}>
            <View style={styles.button}>
              <Text style={styles.name}>
                中华小子
              </Text>
              <View style={styles.label}>
                <LineButton 
                  content='灵感达人'
                  colors={['#9b63cd', '#e0708c']}
                  style={{
                    width: 70,
                    height: 20,
                    ...styles.item
                  }}
                  buttonStyle={{
                    fontSize: 10,
                  }}
                />
                <LineButton 
                  content='点赞狂魔'
                  colors={['#9FD5A5', '#E8F5C8']}
                  style={{
                    width: 70,
                    height: 20,
                    ...styles.item,
                  }}
                  buttonStyle={{
                    fontSize: 10,
                  }}
                />
                <LineButton 
                  content='签到超人'
                  colors={['#EEBD89', '#D13ABD']}
                  style={{
                    width: 70,
                    height: 20,
                    ...styles.item,
                  }}
                  buttonStyle={{
                    fontSize: 10,
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                paddingTop: 2,
              }}
            >
              不念过往，不惧将来
            </Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
              <View style={styles.desc}>
                <Text style={styles.num}>118</Text>
                <Text style={styles.word}>获赞</Text>
              </View>
              <View style={styles.desc}>
                <Text style={styles.num}>287</Text>
                <Text style={styles.word}>关注</Text>
              </View>
              <View style={styles.desc}>
                <Text style={styles.num}>18</Text>
                <Text style={styles.word}>粉丝</Text>
              </View>
            </View>
            <View style={styles.bottomRight}>
              <View style={styles.desc}>
                <Svg width='26' height='26' svgXmlData={jinbi} />
                <Text style={styles.word}>钱包</Text>
              </View>
              <View style={styles.desc}>
                <Svg width='26' height='26' svgXmlData={jifen} />
                <Text style={styles.word}>积分</Text>
              </View>
              <View style={styles.desc}>
                <Svg width='26' height='26' svgXmlData={huiyuan} />
                <Text style={styles.word}>会员</Text>
              </View>
            </View>
          </View>
        </View>
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
      </>
    )
  }
}

export default MyHeader;