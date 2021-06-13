import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
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
      elevation: 6,
    },
    top: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      position: 'absolute',
      right: 0,
      left: 0,
      marginLeft: "auto",
      marginRight: "auto",
      top: 20,
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
      source={{uri: 'https://i.loli.net/2021/06/13/3u4dHWKZLemlOnj.png'}}
      resizeMode='cover'
      style={{
        flex: 1,
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
        backgroundColor: '#F7F7F7'
      }}
    ></Image>
    <View style={styles.top}>
      <Image 
        source={{uri: 'https://z3.ax1x.com/2021/06/13/2Iod8P.jpg'}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
      />
      <View style={{
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 25,
        paddingLeft: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 40,
        marginTop: 15,
        shadowColor: "#eee",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 3,
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 17,
          // fontWeight: 'bold',
          color: '#000',
        }}>用户昵称</Text>
      </View>
    </View>
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
          backgroundColor:'#7C83D5',
          // width: 50,
          // height: 4,
          // marginLeft: 33,
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