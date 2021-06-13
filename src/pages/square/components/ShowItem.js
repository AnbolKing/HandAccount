import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 16,
    color: '#A0A09E',
  },
  arrow: {
    fontSize: 13,
    color: '#A0A09E',
  },
  images: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    borderRadius: 8,
  },
  item: {
    paddingRight: 20,
  },
  imgText: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  imgTitle: {
    fontSize: 12,
    color: '#000',
  },
  imgPrice: {
    fontSize: 12,
    color: '#A0A09E',
  }
})

const handleRenderItem = (item, imgStyle) => {
  return (
    <View style={styles.item}>
      {/* <Image source={require('../../../res/imgs/exampleItem.png')} style={{...styles.image, ...imgStyle}}></Image> */}
      <Image source={{uri: item.item.url}} style={{...styles.image, ...imgStyle}}></Image>
      <View style={styles.imgText}>
        <Text style={styles.imgTitle}>{item.item.text || '手账素材'}</Text>
        {/* <Text style={styles.imgPrice}>免费</Text> */}
      </View>
    </View>
  )
}

const ShowItem = (props) => {  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.arrow}>更多 &gt;</Text>
      </View>
      <View style={styles.images}>
        <FlatList 
          data={props.data}
          keyExtractor={item => item.id}
          renderItem={item => {
            return handleRenderItem(item, props.imgStyle);
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default ShowItem;