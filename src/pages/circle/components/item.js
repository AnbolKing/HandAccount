import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  Avatar
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import LineButton from '../../../components/LineButton';

const CircleItem = () => {
  const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: '#fff',
      marginBottom: 10,
      padding: 12,
    },
    info: {
      width: '100%',
      flexDirection: 'row',
    },
    detail: {
      justifyContent: 'center',
      paddingLeft: 10,
    },
    top: {
      flexDirection: 'row',
    },
    button: {
      flexDirection: 'row'
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#343434'
    },
    time: {
      color: '#C8C8C8',
      fontSize: 13,
    },
    label: {
      marginLeft: 10,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
    title: {
      width: '100%',
      paddingTop: 10,
      fontSize: 15,
      color: '#2F2F2F'
    },
    like: {
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: 'flex-start'
    },
    avatar: {
      flexDirection: 'row',
      alignItems: 'center',
      flexBasis: '60%',
    },
    avatorGroup: {
      flexDirection: 'row',
      position: 'relative',
      paddingRight: 0,
    },
    operation: {
      flexDirection: 'row',
      flexBasis: '40%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    comment: {
      marginTop: 20,
      backgroundColor: '#F7F7F7',
      borderRadius: 5,
      padding: 15,
    },
    commentText: {
      color: '#2B2B2B',
      fontSize: 13,
      fontWeight: 'bold',
      paddingTop: 2,
      paddingBottom: 2,
    },
    commentNum: {
      color: '#7CA8EF',
      fontSize: 13,
      fontWeight: 'bold',
      paddingTop: 2,
    }
  })
  const avatarList = [
    {
      url: 'https://tva2.sinaimg.cn/large/9bd9b167ly1g1p9qayg3qj20b40b43z9.jpg',
      id: '6728r3w',
    },
    {
      url: 'https://tva2.sinaimg.cn/large/9bd9b167ly1fzjxzatbpij20b40b4gmc.jpg',
      id: '23qr23wt54c',
      style: {
        transform:[{translateX:-9}]
      }
    },
    {
      url: 'https://tva2.sinaimg.cn/large/9bd9b167ly1g1p9pd1c9jj20b40b43yp.jpg',
      id: '2efvsdft',
      style: {
        transform:[{translateX:-19}]
      }
    },
    {
      url: 'https://tva2.sinaimg.cn/large/9bd9b167ly1g1p9qfe7jtj20b40b4gmg.jpg',
      id: 'zdgfhut655r',
      style: {
        transform:[{translateX:-29}]
      }
    }
  ]
  const commentList = {
    total: 46,
    data: [
      {
        user: '每个人都有梦想',
        comment: '好'
      },
      {
        user: '灵小壳',
        comment: '这个好看'
      },
      {
        user: 'Anbol你可以',
        comment: '9M这个真的我可以三连三连~'
      },
    ]
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.info}>
        <Avatar 
          size='medium'
          rounded
          source={{uri:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}}
        />
        <View style={styles.detail}>
          <View style={styles.top}>
            <Text style={styles.name}>中华小子</Text>
            <View style={styles.button}>
              <LineButton 
                content='点赞狂魔'
                colors={['#9FD5A5', '#E8F5C8']}
                style={{
                  width: 70,
                  height: 20,
                  ...styles.label,
                }}
                buttonStyle={{
                  fontSize: 10,
                }}
              />
            </View>
          </View>
          <Text style={styles.time}>2天前</Text>
        </View>
      </View>
      <Image
        source={require('../../../res/imgs/exampleItem.png')}
        style={{
          width: '60%',
          height: 330,
          borderRadius: 10,
          marginTop: 15,
        }}
        resizeMode='cover'
      ></Image>
      <Text style={styles.title}>
        突然inspiration爆发画了一个偏向山水的背景图，还有gif的动图，下次完善一下再发出来~！
      </Text>
      <View style={styles.like}>
        <View style={styles.avatar}>
          <View style={styles.avatorGroup}>
            {
              avatarList.map(item => {
                return (
                  <Avatar 
                    size='small'
                    rounded
                    source={{uri: item.url}}
                    key={item.id}
                    containerStyle={{
                      ...item.style
                    }}
                  />
                )
              })
            }
          </View>
          <Text style={{
            ...styles.time,
            transform:[{translateX:-20}]
          }}>938喜欢</Text>
        </View>
        <View style={styles.operation}>
          <Icon
            name="heart-o"
            size={20}
            color="#333333"
          />
          <Icon
            name="comment-o"
            size={20}
            color="#333333"
          />
          <Icon
            name="ellipsis-h"
            size={20}
            color="#333333"
          />
        </View>
      </View>
      <View style={styles.comment}>
        {
          commentList.data.map(item => {
            return (
              <Text style={styles.commentText}>{item.user}：{item.comment}</Text>
            )
          })
        }
        <Text style={styles.commentNum}>查看全部{commentList.total}条评论......</Text>
      </View>
    </View>
  )
}

export default CircleItem;