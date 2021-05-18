import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  avatarContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EAEAEA'
  }, 
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    color: '#000'
  },
  bottom: {
    paddingTop: 3,
  },
  content: {
    fontSize: 13,
    color: '#9F9F9F'
  }
})

const ListItem = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image 
          source={{uri: data.avatar}}
          style={styles.avatar}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.top}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.content}>{data.date}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.content}>{data.content}</Text>
        </View>
      </View>
    </View>
  )
}

export default ListItem;