import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import Svg from 'react-native-svg-uri';
import {
  Add,
  Calendar,
  Info
} from '../res/iconSvg';


const CustormerBar = (props) => {
  if(props.hasOwnProperty('props')) {
    props = props.props;
  }
  console.log(props);
  const { goToPage, tabs, activeTab } = props;
  return (
    <View
      style={{
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: activeTab===0 ? '#fff' : '#F7F8FD',
        flexDirection: 'row',
      }}
    >
      {
        activeTab===0 
        ? (
          <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} translucent={false}/>
        )
        : (
          <StatusBar backgroundColor={'#F7F8FD'} barStyle={'dark-content'} translucent={false}/>
        )
      }
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flex: 2}}>
      {
        tabs.map((item, index) => {
          return (
            <View 
              style={{
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                onPress={() => goToPage(index)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 5,
                }}
              >
                <Text
                  style={{
                    color: activeTab===index ? '#000' : '#B5B5B5',
                    fontSize: 20,
                    fontWeight: 'bold',
                    ...props.wordStyle,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '50%',
                  backgroundColor: activeTab===index ? '#E066FF' : '#fff',
                  height: 4,
                  borderRadius: 10,
                }}
              ></View>
            </View>
          )
        })
      }
      </View>
      <View 
        style={{
          display: props.showIcon ? 'flex' : 'none',
          paddingRight: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1
        }}
      >
        <Svg width='22' height='22' svgXmlData={Add} />
        <Svg width='20' height='20' svgXmlData={Calendar} />
        <Svg width='20' height='20' svgXmlData={Info} />
      </View>
    </View>
  )
}

export default CustormerBar;