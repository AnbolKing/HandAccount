import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cell: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    padding: 10,
    borderRadius: 15,
  },
  text: {
    paddingTop: 8,
    fontSize: 13,
    color: '#000',
  }
})

const handleRenderButton = (props) => {
  const { data } = props;
  return data.map((item, index) => {
    return (
      <View 
        style={{
        ...styles.cell,
        }} 
        key={index}
      >
        <View style={{...item.style, ...styles.iconStyle}}>
          {item.icon ? item.icon : null}
        </View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  })
}

const handleRenderDivider = () => {
  return (
    <View style={{paddingTop: 15, paddingBottom: 15}}>
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#EAEAEA',
          width: '90%',
          height: 0,
          alignSelf: 'center'
        }}
      ></View>
    </View>
  )
}

const FlexButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        {
          props.data ? handleRenderButton(props) : null
        }
      </View>
      {
        props.bottomLine ? handleRenderDivider() : null
      }
    </View>
  )
}

export default FlexButton;