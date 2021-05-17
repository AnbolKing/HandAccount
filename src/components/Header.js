import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    zIndex: 99,
  },
  cell: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    
  },
  cellfixed: {
    height: '100%',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const Header = (props) => {
  return (
    <View style={{...styles.headerContainer, ...props.containerStyle}}>
      <View style={styles.cellfixed}>
        {props.left===null ? '' : props.left}
      </View>
      <View style={styles.cell}>
        <Text style={styles.headerText}>
          {props.title}
        </Text>
      </View>
      <View style={styles.cellfixed}>
        {props.right===null ? '' : props.right}
      </View>
    </View>
  )
}

export default Header;