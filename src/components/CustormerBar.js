import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import Svg from 'react-native-svg-uri';
import {
  Add,
} from '../res/iconSvg';


const CustormerBar = (props) => {
  const { goToPage, tabs, activeTab } = props;
  return (
    <View
      style={{
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        flexDirection: 'row',
      }}
    >
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
      <Svg width='25' height='25' svgXmlData={Add}/>
    </View>
  )
}

export default CustormerBar;