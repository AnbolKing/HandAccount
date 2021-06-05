import React, { Component } from 'react';
import {
  View, 
  Text, 
  StatusBar, 
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContext } from "@react-navigation/native";

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  timeContainer: {
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    right: 20,
  },
  time: {
    fontSize: 13,
    color: '#000',
  }
})

class AdPage extends Component {
  static contextType = NavigationContext;
  state = {
    time: 3,
  }
  handleTimeCount = () => {
    this.timer = setInterval(()=>{
      let t = this.state.time - 1;
      if (t === 0){
        clearInterval(this.timer);
        this.handleJump();
      }
      else {
        this.setState({
            time:t,
        })
      }
    },1000);
  }
  handleJump = () => {
    this.context.navigate('TabBar');
  }
  componentDidMount() {
    this.handleTimeCount();
  }
  render() {
    const { time } = this.state;
    return (
      <ImageBackground
        source={{uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01046a5be24524a801209252838220.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625486476&t=061b034472037e188fafde3403678952'}}
        style={styles.bgImage}
        resizeMode='cover'
      >
        <StatusBar backgroundColor="transparent" translucent={true} ref={c => this.status=c}/>
        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.timeContainer}
          onPress={()=>{
            //点击‘跳过’按钮，同样可以实现进入项目的效果                       
            this.handleJump();
          }}
        >
          <View>
            <Text style={styles.time}>跳过 {time}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

export default AdPage;