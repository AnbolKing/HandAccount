import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const LinerButton = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={{
        width: '100%',
        height: '100%',
        ...props.style,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={
          props.direction==='top' ? 
          {
            x: 0, y: 1
          } : 
          {
            x: 1, y: 0
          }
        }
        colors={[...props.colors]}
        style={{
          ...styles.linearGradient,
          ...props.linearGradientStyle
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            ...props.buttonStyle
          }}
        >
          {props.content}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default LinerButton;