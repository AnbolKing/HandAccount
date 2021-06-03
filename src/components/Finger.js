import React, { useState } from 'react';
import {
    Alert,
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    StyleSheet,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import ShakingText from './ShakingText';
import { useFocusEffect } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 164, 222, 0.9)',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  contentContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
  },
  logo: {
      marginVertical: 45,
  },
  heading: {
      textAlign: 'center',
      color: '#00a4de',
      fontSize: 21,
  },
  description: (error) => {
    return {
        textAlign: 'center',
        color: error ? '#ea3d13' : '#a5a5a5',
        height: 65,
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20,
    }
  },
  buttonContainer: {
    padding: 20,
  },
  buttonText: {
    color: '#8fbc5a',
    fontSize: 15,
    fontWeight: 'bold',
  },
});


const FingerPrintPopup = React.memo(props => {
    let { close, success } = props;
    const description = null;

    const [LegacyInfo, setLegacyInfo] = useState({
        errorMessageLegacy: undefined,
        biometricLegacy: undefined
    })
    useFocusEffect(
        React.useCallback(() => {
            console.log("进入指纹组件");
            //判断设备是否支持指纹识别
            detectFingerprintAvailable();
            //判断Android API是不是<23，高于此版本使用标准指纹解锁api;低于此版本使用兼容适配版本
            if (requiresLegacyAuthentication()) {
                authLegacy();
            } else {
                authCurrent();
            }

            return () => {
                console.log("离开指纹组件");
                //组件卸载，停止指纹监听指纹扫描器并释放内部缓存
                FingerprintScanner.release();
            }
        }, [])
    )

    //判断安卓版本
    function requiresLegacyAuthentication() {
        return Platform.Version < 23;
    }

    //控制指纹组件消失
    const handleFingerprintDismissed = () => {
        if(close) {
          close();
        }
    };
    //检测手机是否支持指纹识别
    const detectFingerprintAvailable = () => {
        FingerprintScanner
            .isSensorAvailable()
            .catch(error => {
                Alert.alert("您的设备不支持指纹识别，请选择其他方式登录")
            });
    }
    //android API>23时，调用authCurrent
    const authCurrent = () => {
      FingerprintScanner
        .authenticate({title: '指纹登录', cancelButton: '取消'})
        .then(() => {
            //离开页面时将popupShowed置为false
            handleFingerprintDismissed();
            //指纹验证成功后的事件，比如登录
            successVerify();
        })
        .catch(() => {
            //点击取消或上方空白区隐藏组件后，将popupShowed置为false
            //这里是控制指纹组件切换显示/隐藏的关键！
            handleFingerprintDismissed();
        })
    }

    //指纹验证成功后的事件，比如登录
    const successVerify = () => {
      if(success) {
        success();
      }
    }
    //android API<23时调用指纹组件的兼容写法
    const authLegacy = () => {
        FingerprintScanner
            .authenticate({onAttempt: handleAuthenticationAttemptedLegacy})
            .then(() => {
                //指纹验证成功
                handleFingerprintDismissed();
                Alert.alert('指纹身份验证', '身份验证成功');
                successVerify();
            })
            .catch((error) => {
                //指纹验证失败
                setLegacyInfo({errorMessageLegacy: error.message, biometricLegacy: error.biometric});
                description.shake();
                handleFingerprintDismissed();
            });
    }

    //当用户尝试扫描指纹但失败时的回调函数
    const handleAuthenticationAttemptedLegacy = (error) => {
        setLegacyInfo({
            ...LegacyInfo,
            errorMessageLegacy: error.message
        });
        description.shake();
    };

    //手动写一个指纹验证的组件
    const renderLegacy = (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image
                    style={styles.logo}
                    source={require('../res/imgs/finger.png')}
                />
                <Text style={styles.heading}>
                    生物识别{'\n'}身份验证
                </Text>
                <ShakingText
                    ref={(instance) => {
                        description = instance;
                    }}
                    style={styles.description(!!LegacyInfo.errorMessageLegacy)}>
                    {LegacyInfo.errorMessageLegacy || `Scan your ${LegacyInfo.biometricLegacy} on the\ndevice scanner to continue`}
                </ShakingText>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleFingerprintDismissed}
                >
                    <Text style={styles.buttonText}>
                        返回
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return () => {
        //android API>23时，不需要渲染；否则渲染renderLegacy的组件
        if (requiresLegacyAuthentication()) {
            return renderLegacy
        }

        return null;

    }

})


export default FingerPrintPopup;