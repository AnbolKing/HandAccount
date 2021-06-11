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
      source={{uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018ca05b6c2902a801206a35a98b80.png%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625993559&t=6c5ba5726ab038c3022b4ae113207cf5'}}
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
          marginLeft: 33,
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
        {/* <TabView style={{flex: 1}} tabLabel="我的喜欢" name='like' /> */}
      </ScrollTabView>
    </View>
    </>
  );
}

export default MyIndex;