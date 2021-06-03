import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Svg from 'react-native-svg-uri';
import { NavigationContext } from "@react-navigation/native";
import {
  camera,
  camera_reverse
} from '../res/iconSvg';

class Camera extends Component {
  static contextType=NavigationContext;
  state = {
    cameraType: RNCamera.Constants.Type.back
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.context.goBack({avatarUrl: data.uri})
    }
  };

  switchCamera = () => {
    var { cameraType } = this.state;
    if(cameraType === RNCamera.Constants.Type.back) {
      this.setState({
        cameraType: RNCamera.Constants.Type.front,
      })
    }
    if(cameraType === RNCamera.Constants.Type.front) {
      this.setState({
        cameraType: RNCamera.Constants.Type.back,
      })
    }
  }

  render() {
    const { cameraType } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={cameraType}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <StatusBar translucent={true} hidden={true}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture} activeOpacity={0.9}>
              <Svg width='43' height='43' svgXmlData={camera} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.switchCamera.bind(this)} style={styles.capture} activeOpacity={0.9}>
              <Svg width='42' height='42' svgXmlData={camera_reverse} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    alignItems: 'center',
    height: 500,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


export default Camera;