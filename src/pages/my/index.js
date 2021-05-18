import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ScrollTabView, ScrollView } from 'react-native-scroll-head-tab-view';
import MyHeader from './components/myHeader';
import HandAccount from './components/handaccount';
import Like from './components/like';
import Collection from './components/collection';
  
const MyIndex = () => {
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
    if(props.name === 'account') {
      return (
        <HandAccount props={props}/>
      );
    }
    if(props.name === 'collection') {
      return (
        <Collection props={props}/>
      );
    }
    if(props.name === 'like') {
      return (
        <Like props={props}/>
      );
    }
  }  

  const handleRenderHeader = useCallback(() => {
    return (
      <View onLayout={headerOnLayout}>
        <MyHeader />
      </View>
    );
  }, []);

  return (
    <>
    <Image
      source={require('../../res/imgs/bg.jpg')}
      resizeMode='cover'
      style={{
        flex: 1,
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
      }}
    ></Image>
    <View style={styles.container}>
      <ScrollTabView 
        headerHeight={headerHeight} 
        renderScrollHeader={handleRenderHeader}
        // renderTabBar={(props) => {
        //   props.showIcon = false;
        //   props.wordStyle = {
        //     fontSize: 15,
        //   }
        //   return (
        //     <CustormerBar 
        //       props={props} 
        //     />
        //   )
        // }}
        tabBarUnderlineStyle={{
          backgroundColor:'#E066FF',
          width: 40,
          height: 4,
          marginLeft: 15
        }}
        tabBarTextStyle={{
          fontSize: 15,
          fontWeight: '700'
        }}
        tabBarStyle={{
          backgroundColor: '#fff',
        }}
      >
        <TabView style={{flex: 1}} tabLabel="我的手账" name='account' />
        <TabView style={{flex: 1}} tabLabel="我的收藏" name='collection' />
        <TabView style={{flex: 1}} tabLabel="我的喜欢" name='like' />
      </ScrollTabView>
    </View>
    </>
  );
}

export default MyIndex;