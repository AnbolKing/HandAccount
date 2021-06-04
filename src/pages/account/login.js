import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { 
  Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Input 
} from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import LineButton from '../../components/LineButton';
import { NavigationContext } from "@react-navigation/native";

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    height: 450,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  phone: {
    color: '#fff',
    fontSize: 35,
  },
  mobile: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 10,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 275,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#000',
    fontSize: 15,
  },
  containerStyle: {
    margin: 10,
  },
  iconContainerStyle: {
    marginRight: 10,
  },
  others: {
    color: '#fff',
    fontSize: 14,
    paddingTop: 20,
    fontWeight: 'bold'
  },
  rules: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.7)',
    width: '80%',
    textAlign: 'center',
    paddingTop: 40,
  },
  inputContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipCode: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 50,
    letterSpacing: 3,
  },
  codeContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  tipPhone: {
    fontSize: 13,
    color: '#888',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  codeFieldRoot: {
    marginTop: 10,
    marginBottom: 10,
  },
  backText: {
    alignSelf: 'flex-end',
    fontSize: 13,
    textDecorationLine: 'underline',
    color: '#888',
  },
  cell: {
    width: 45,
    height: 45,
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  focusCell: {
    borderColor: '#7d53ea',
    backgroundColor: '#F6F9FD'
  },
  loginButton: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    width: '50%',
    borderRadius: 50,
    marginTop: 30,
  },
  checkText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#888'
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 50,
    marginBottom: 20,
  }
})

class Login extends Component {
  static contextType = NavigationContext;
  state = {
    // 1: 首页； 2：登录页； 3：验证码
    showPage: 1,
    phoneNumber: '18370605879',
    isValid: true,
    isCount: false,
    timeText: '重新获取',
    code: ''
  }
  async componentDidMount() {
    let res = await DeviceInfo.getPhoneNumber();
    console.log(res);
  }
  handleGetPhone = () => {
    return '183 **** 5879';
  }
  handleChangePhone = (phone) => {
    this.setState({
      phoneNumber: phone,
    })
  }
  handleSubmitPhone = () => {
    this.setState({
      showPage: 3,
    })
    this.handleTimeCount();
  }
  handleTimeCount = () => {
    if(this.state.isCount) {
      return ;
    }
    this.setState({
      isCount: true,
    })
    let seconds = 10;
    this.setState({
      timeText: `${seconds}s后重新获取`
    })
    let timer = setInterval(() => {
      seconds--;
      this.setState({
        timeText: `${seconds}s后重新获取`
      })
      if(seconds === 0) {
        clearInterval(timer);
        this.setState({
          timeText: '重新获取',
          isCount: false,
        })
      }
    }, 1000)
  }
  handleRepeatCode = () => {
    this.handleTimeCount();
  }
  handleSubmitCode = () => {
    this.context.navigate('TabBar');
  }
  handleChangeCode = (code) => {
    this.setState({
      code,
    })
  }
  handleBackLogin = () => {
    this.setState({
      showPage: 2,
    })
  }
  renderShow = () => {
    return (
      <ImageBackground 
        // source={require('../../res/imgs/exampleItem.png')}
        source={{uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F58%2F88%2F5c273b70610af.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625391933&t=aa448087a7ca5a43ca416c58d349ed3e'}}
        style={styles.image}
        resizeMode='cover'
      >
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.login}>
          <View style={styles.phoneContainer}>
            <Image
              source={require('../../res/imgs/logo.png')}
              style={styles.logo}
            ></Image>
            <Text style={styles.phone}>{this.handleGetPhone()}</Text>
            <Text style={styles.mobile}>中国移动运营商提供授权</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button
              icon={
                <Icon
                  name="wechat"
                  size={17}
                  color="#BDB76B"
                  style={styles.iconContainerStyle}
                />
              }
              title="微信登录"
              titleStyle={styles.titleStyle}
              buttonStyle={{
                ...styles.button,
              }}
              containerStyle={styles.containerStyle}
              activeOpacity={0.8}
            />
            <Button
              icon={
                <Icon
                  name="mobile"
                  size={25}
                  color="#000"
                  style={styles.iconContainerStyle}
                />
              }
              title="手机一键登录"
              titleStyle={styles.titleStyle}
              buttonStyle={{
                ...styles.button,
                backgroundColor: 'rgba(255, 255, 255, 0.6)'
              }}
              containerStyle={styles.containerStyle}
              onPress={() => this.setState({showPage: 2})}
            />
            <Text style={styles.others}>其他登录方式 &gt;</Text>
          </View>
          <Text style={styles.rules}>登录注册代表同意《用户协议》《隐私政策》《儿童/青少年个人信息保护规则》</Text>
        </View>
      </ImageBackground>
    )
  }
  renderLogin = () => {
    const { phoneNumber } = this.state;
    return (
      <ImageBackground 
        source={{uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F36%2F52%2F5bda9420d4982.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625392560&t=1312eb08d885b9087f0fa0ca3ca1f371'}}
        style={styles.image}
        resizeMode='cover'
      >
        <View style={styles.checkContainer}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <View style={styles.inputContainer}>
            <Input
              placeholder='请输入手机号'
              leftIcon={
                <Icon
                  name='mobile'
                  size={25}
                  color='#eee'
                />
              }
              label="Phone"
              maxLength={11}
              placeholderTextColor="#fff"
              inputStyle={{
                fontSize: 15,
                color: '#fff',
              }}
              inputContainerStyle={{
                borderBottomColor: '#eee',
              }}
              containerStyle={{
                justifyContent: 'center',
                width: '70%',
              }}
              leftIconContainerStyle={{
                marginRight: 5,
              }}
              labelStyle={{
                fontSize: 25,
                color: '#fff'
              }}
              keyboardType="phone-pad"
              onChangeText={this.handleChangePhone}
              value={phoneNumber}
              onSubmitEditing={this.handleSubmitPhone}
            />
          </View>
          <View style={styles.buttonContainer}>
            <LineButton 
              content='获取验证码'
              colors={['#FD80A8', '#FCCF42']}
              style={{
                width: '40%',
                height: 30,
              }}
              buttonStyle={{
                fontSize: 15,
              }}
              onPress={this.handleSubmitPhone}
            />
          </View>
        </View>
      </ImageBackground>
    )
  }
  renderCode = () => {
    const { phoneNumber, code, timeText } = this.state;
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <Text style={styles.tipCode}>请输入六位验证码</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.tipPhone}>已发送到号码{phoneNumber}</Text>
          <CodeField
            onSubmitEditing={this.handleSubmitCode}
            value={code}
            onChangeText={this.handleChangeCode}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Text style={styles.backText} onPress={this.handleBackLogin}>返回重填手机号</Text>
        </View>
        <TouchableOpacity activeOpacity={1} style={{justifyContent: 'center', alignItems: 'center'}} onPress={this.handleRepeatCode}>
          <View style={styles.loginButton}>
            <Text style={styles.checkText}>{timeText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    const { showPage } = this.state;
    return (
      <View>
        {
          showPage===1
          ? this.renderShow() 
          : (
            showPage===2 ? this.renderLogin() : this.renderCode()
          )
        }
      </View>
    )
  }
}

export default Login;