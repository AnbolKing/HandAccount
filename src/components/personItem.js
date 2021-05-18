import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EAEAEA',
    alignItems: 'center',
  },
  avatarContainer: {
    paddingRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    color: '#000'
  },
  desc: {
    fontSize: 12,
    paddingTop: 3,
    color: '#A7A7A7'
  },
  type: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 4,
    paddingTop: 4,
    borderRadius: 30,
    borderWidth: 1,
  },
  word: {
    fontSize: 14,
  }
})

const handleRenderContent = (data) => {
  if(data.type === 'fans') {
    return (
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.desc}>粉丝 · {data.fans}|手账 · {data.account}</Text>
      </View>
    )
  }
  if(data.type === 'focus') {
    return (
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.desc}>{data.desc}</Text>
      </View>
    )
  }
}

const handleRenderButton = (data) => {
  if(data.type === 'fans') {
    return (
      <View style={{
        ...styles.type,
        borderColor: data.isFocus ? '#999999' : '#C5414D',
      }}>
        <Text style={{
            ...styles.word,
            color: data.isFocus ? '#999999' : '#C5414D',
          }}>
          {
            data.isFocus ? '互相关注' : '回粉'
          }
        </Text>
      </View>
    )
  }
  if(data.type === 'focus') {
    return (
      <View style={{
        ...styles.type,
        borderColor: '#999999',
      }}>
        <Text style={{
            ...styles.word,
            color: '#999999',
          }}>
          已关注
        </Text>
      </View>
    )
  }
}

const PersonItem = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: data.avatar}}
          style={styles.avatar}
        />
      </View>
      {
        handleRenderContent(data)
      }
      {
        handleRenderButton(data)
      }
    </View>
  )
}

export default PersonItem;