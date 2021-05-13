import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ScrollTabView, ScrollView } from 'react-native-scroll-head-tab-view';
import LatestHeader from '../latest/header';
import JingXuan from '../latest/jingxuan';
import TieZhi  from '../latest/tiezhi';
import MuBan from '../latest/muban' ;
import HuaBi from '../latest/huabi' ;
import YanSe from '../latest/yanse' ;

const Latest = () => {
  const [headerHeight, setHeaderHeight] = useState(200);
  const headerOnLayout = useCallback((event) => {
    const { height } = event.nativeEvent.layout;
    setHeaderHeight(height);
  }, []);
  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  });
  
  const TabView = (props) => {
    if(props.name === 'jingxuan') {
      return (
        <ScrollView {...props}>
          <JingXuan />
        </ScrollView>
      );
    }
    if(props.name === 'tiezhi') {
      return (
        <ScrollView {...props}>
          <TieZhi />
        </ScrollView>
      );
    }
    if(props.name === 'muban') {
      return (
        <ScrollView {...props}>
          <MuBan />
        </ScrollView>
      );
    }
    if(props.name === 'huabi') {
      return (
        <ScrollView {...props}>
          <HuaBi />
        </ScrollView>
      );
    }
    if(props.name === 'yanse') {
      return (
        <ScrollView {...props}>
          <YanSe />
        </ScrollView>
      );
    }
  }  

  const handleRenderHeader = useCallback(() => {
    return (
      <View onLayout={headerOnLayout}>
        <LatestHeader />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollTabView 
        headerHeight={headerHeight} 
        renderScrollHeader={handleRenderHeader}
        tabBarUnderlineStyle={{
          backgroundColor:'#FAB0D3',
          // width: 40,
          // height: 4,
          // marginLeft: 15
        }}
        tabBarTextStyle={{
          fontSize: 15,
          fontWeight: '700'
        }}
        tabBarStyle={{
          backgroundColor: '#E8F4FF',
        }}
      >
        <TabView tabLabel="精选" name='jingxuan' />
        <TabView tabLabel="贴纸" name='tiezhi' />
        <TabView tabLabel="模板" name='muban' />
        <TabView tabLabel="画笔" name='huabi' />
        <TabView tabLabel="颜色" name='yanse' />
      </ScrollTabView>
    </View>
  );
}

export default Latest;