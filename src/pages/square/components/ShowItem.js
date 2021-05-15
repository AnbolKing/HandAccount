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
    width: 110,
    height: 115,
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

const imgData = [
  {
    url: 'https://s2.ax1x.com/2019/05/16/E7vLjA.jpg',
    id: '237268_ftb',
  },
  {
    url: 'https://s2.ax1x.com/2019/05/16/E7vLjA.jpg',
    id: '24f34ftb',
  },
  {
    url: 'https://s2.ax1x.com/2019/05/16/E7vLjA.jpg',
    id: '34f3',
  },
  {
    url: 'https://s2.ax1x.com/2019/05/16/E7vLjA.jpg',
    id: 'q34fq3',
  },
  {
    url: 'https://s2.ax1x.com/2019/05/16/E7vLjA.jpg',
    id: '134f314t',
  }
]

const handleRenderItem = (item) => {
  return (
    <View style={styles.item}>
      <Image source={require('../../../res/imgs/exampleItem.png')} style={styles.image}></Image>
      <View style={styles.imgText}>
        <Text style={styles.imgTitle}>萌宠乐园</Text>
        <Text style={styles.imgPrice}>免费</Text>
      </View>
    </View>
  )
}

const ShowItem = () => {  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>最新贴纸</Text>
        <Text style={styles.arrow}>更多 &gt;</Text>
      </View>
      <View style={styles.images}>
        <FlatList 
          data={imgData}
          keyExtractor={item => item.id}
          renderItem={item => {
            return handleRenderItem(item);
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default ShowItem;