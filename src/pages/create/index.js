import React, { Component } from 'react';
import { 
  View, 
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  Platform,
  ImageBackground,
} from 'react-native';
import Gestures from 'react-native-easy-gestures';
import Svg from 'react-native-svg-uri';
import {
  wenben,
  image,
  huabi,
  tiezhi,
  beijing,
  gou,
} from '../../res/iconSvg';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { 
  Slider,
  Input,
} from 'react-native-elements';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../../components/Header';
import {
  leftArrow,
  shanchu,
} from '../../res/iconSvg';
import { NavigationContext } from "@react-navigation/native";
import { captureRef } from "react-native-view-shot";
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import CameraRoll from "@react-native-community/cameraroll";
import {
  hasPermission,
} from '../../utils/permission';
import ScrollableTabView  from 'react-native-scrollable-tab-view';

const styles = StyleSheet.create({
  createContainer: (x, y, z , opacity) => {
    return {
      width: '100%',
      height: '100%',
      backgroundColor: `rgba(${x}, ${y}, ${z}, ${opacity})`,
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  operation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  operationItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  itemText: {
    paddingTop: 3,
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    // fontFamily: 'kangxi'
    fontFamily: 'wenyue1',
  },
  itemContainer: {
    margin: 6,
    backgroundColor: '#fff',
  },
  contentContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
  },
  imageContainer: {
    width: 58,
    height: 58,
    borderRadius: 10,
  },
  backChoose: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  },
  colorChoose: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  opacityChoose: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemColor: {
    alignItems: 'center',
    width: '20%',
    marginTop: 10,
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backColor: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    // backgroundColor: '#000',
  },
  textChoose: {
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
  }
})

class CreateIndex extends Component {
  static contextType = NavigationContext;
  state = {
    operations: [
      {
        icon: {
          name: 'https://z3.ax1x.com/2021/06/13/2IIu6S.png',
          width: 42,
          height: 42
        },
        text: '图片',
        onPress: () => {
          this.setState({
            chooseIndex: 1,
          })
          this.handleImage();
        },
      },
      {
        icon: {
          name: 'https://z3.ax1x.com/2021/06/13/2IIlwj.png',
          width: 42,
          height: 42
        },
        text: '背景',
        onPress: () => {
          this.setState({
            chooseIndex: 2,
          })
          this.handleBack()
        }
      },
      {
        icon: {
          name: 'https://z3.ax1x.com/2021/06/13/2IIKOg.png',
          width: 42,
          height: 42
        },
        text: '文本',
        onPress: () => {
          this.setState({
            chooseIndex: 3,
          })
          this.handleInput();
        },
      },
      {
        icon: {
          name: 'https://z3.ax1x.com/2021/06/13/2IIQmQ.png',
          width: 42,
          height: 42
        },
        text: '画笔',
        onPress: () => {
          this.setState({
            chooseIndex: 4
          })
          this.handleChooseDeep()
        }
      },
      {
        icon: {
          name: 'https://z3.ax1x.com/2021/06/13/2IInl8.png',
          width: 42,
          height: 42
        },
        text: '贴纸',
        onPress: () => {
          this.setState({
            chooseIndex: 5
          })
          this.handleChooseBack()
        }
      },
    ],
    chooseData: [
      {
        url: 'https://z3.ax1x.com/2021/06/12/25PMcQ.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25PMcQ.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25Pu9S.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25Pu9S.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25PK1g.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25PK1g.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25P1ns.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25P1ns.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25PQXj.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25PQXj.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25P3Bn.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25P3Bn.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25P87q.png',
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25PJA0.png',
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25PYNV.png',
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25PthT.png',
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25PU9U.png',
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25Pa3F.png',
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25CIYT.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25CIYT.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25C5kV.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25C5kV.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25Cwwt.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25Cwwt.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25C6Sg.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25C6Sg.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25CrY8.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/25CrY8.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25C0TP.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25CDFf.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25C2Os.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25CsfS.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25CclQ.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25Cgyj.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25CWmn.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25ChT0.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/25Cfwq.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qJkd.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24q8TH.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24q30e.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24q1mD.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qQOO.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qM6K.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qKl6.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24quSx.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qmf1.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qeYR.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qZk9.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qETJ.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qAw4.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qkmF.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24qiOU.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24TTzT.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bnsS.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bmM8.png',
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bQaj.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bJzV.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24buqg.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bMZQ.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24blIs.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24b3in.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bGR0.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24b8Gq.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bwdJ.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24b0o9.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24brJ1.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bDiR.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bsRx.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24byz6.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bcQK.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bgsO.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24b2LD.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bWee.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bfdH.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24b5FA.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bhod.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bIJI.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24boWt.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bHQf.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24b7SP.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24bby8.png'
      },
    ],
    chooseBack: [
      {
        x: 255,
        y: 182,
        z: 193,
        text: '浅粉色',
      },
      {
        x: 255,
        y: 192,
        z: 203,
        text: '粉红',
      },
      {
        x: 238,
        y: 130,
        z: 238,
        text: '紫罗兰',
      },
      {
        x: 139,
        y: 0,
        z: 139,
        text: '深紫色',
      },
      {
        x: 0,
        y: 0,
        z: 139,
        text: '深蓝色',
      },
      {
        x: 176,
        y: 196,
        z: 222,
        text: '淡钢蓝',
      },
      {
        x: 112,
        y: 128,
        z: 144,
        text: '石板灰',
      },
      {
        x: 135,
        y: 206,
        z: 235,
        text: '天蓝色',
      },
      {
        x: 60,
        y: 179,
        z: 113,
        text: '青绿',
      },
      {
        x: 255,
        y: 255,
        z: 224,
        text: '浅黄',
      },
      {
        x: 210,
        y: 180,
        z: 140,
        text: '晒黑',
      },
      {
        x: 210,
        y: 105,
        z: 30,
        text: '巧克力',
      },
    ],
    chooseTextColor: [
      {
        x: 245,
        y: 245,
        z: 245,
        text: '白色',
      },
      {
        x: 0,
        y: 0,
        z: 0,
        text: '黑色',
      }
    ],
    chooseDeep: [
      {
        url: 'https://z3.ax1x.com/2021/06/12/24g7Hf.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/24g7Hf.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/242Suq.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/242Suq.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24g5jI.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/24g5jI.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24gTDP.png',
        onPress: () => this.handleCheckImage('https://z3.ax1x.com/2021/06/12/24gTDP.png')
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24gj3j.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/242F5F.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/242iUU.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/242pD0.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/2429bV.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24RW6A.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24Rcfe.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24RfOI.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24R2SH.png'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/12/24RRld.png'
      }     
    ],
    chooseBackImg: [
      {
        url: 'https://z3.ax1x.com/2021/06/13/2IHmNj.jpg'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/13/2IHeEQ.jpg'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/13/2IHVHg.jpg'
      },
      {
        url: 'https://z3.ax1x.com/2021/06/13/2IHAu8.jpg'
      },
    ],
    snapPointsChoose: ['0%', '18%', '35%'],
    snapPointsBack: ['0%', '20%', '40%'],
    snapPointsText: ['0%', '20%'],
    chooseIndex: 5,
    x: 224,
    y: 255,
    z: 255,
    textX: 255,
    textY: 255,
    textZ: 255,
    value: 100,
    chooseImage: [],
    chooseText: [],
    showDashed: true,
    showDashedText: true,
    showImage: false,
    textValue: '',
    accountImage: [],
    accountUrl: '',
    backUrl: 'https://z3.ax1x.com/2021/06/13/2IHlvV.jpg',
  }
  handleText = (textValue) => {
    this.setState({
      textValue,
    })
  }
  handleCheckText = () => {
    const { chooseText, textValue } = this.state;
    chooseText.push(textValue);
    this.setState({
      chooseText,
      textValue: '',
    })
    Keyboard.dismiss();
    this.text.snapTo(0);
  }
  handleInput = () => {
    this.text.snapTo(1);
  }
  handleCheckImage = (url) => {
    const { chooseImage } = this.state;
    chooseImage.push(url);
    this.setState({
      chooseImage,
    })
  }
  handleDaleteImage = (index) => {
    const { chooseImage } = this.state;
    let backup = chooseImage;
    backup.splice(index, 1);
    this.setState({
      chooseImage: backup,
    })
  }
  handleDaleteText = (index) => {
    const { chooseText } = this.state;
    let backup = chooseText;
    backup.splice(index, 1);
    this.setState({
      chooseText: backup,
    })
  }
  handleCloseDashedImage = () => {
    this.setState(prev => {
      return {
        ...prev,
        showDashedImage: !prev.showDashedImage,
      }
    })
  }
  handleCloseDashedText = () => {
    this.setState(prev => {
      return {
        ...prev,
        showDashedText: !prev.showDashedText,
      }
    })
  }
  handleImage = () => {
    const { chooseImage } = this.state;
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if(response.didCancel) {
          return ;
        }
        let avatarUrl = response.assets[0].uri;
        chooseImage.push(avatarUrl);
        this.setState({
          chooseImage,
        })
      },
    )
  }
  handleChangeBack = (item) => {
    if(this.state.backUrl) {
      this.setState({
        backUrl: '',
      })
    }
    this.setState({
      x: item.x,
      y: item.y,
      z: item.z,
    })
  }
  handleChooseText = (item) => {
    this.setState({
      textX: item.x,
      textY: item.y,
      textZ: item.z,
    })
  }
  handleChangeOpacity = (value) => {
    this.setState({
      value,
    });

  }
  handleBack = () => {
    this.back.snapTo(1);
  }
  handleChooseBack = () => {
    this.chooseBack.snapTo(1);
  }
  handleChooseDeep = () => {
    this.chooseDeep.snapTo(1);
  }
  handleReturnBack = () => {
    this.context.goBack();
  }
  handlePhoto = () => {
    captureRef(this.account, {
      format: "jpg",
      quality: 0.8
    }).then(
      uri => {
        this.setState({
          showImage: true,
          accountUrl: uri,
          accountImage: [
            {
              url: uri,
            },
          ]
        })
      },
      error => alert(error)
    );
  }  
  handleDone = async () => {
    let permission = await hasPermission();
    console.log(permission);
    if(!permission) {
      return ;
    }
    let promise = CameraRoll.save(this.state.accountUrl);
    promise.then(function (result) {
      alert('保存成功！地址如下：\n' + result);
    }).catch(function (error) {
      alert('保存失败！\n' + error);
    });
    this.context.navigate('TabBar');
  }
  renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.itemContainer} key={item.id} activeOpacity={0.9} onPress={item.onPress}>
          <Image
            source={{uri: item.url}}
            style={styles.imageContainer}
          ></Image>
        </TouchableOpacity>
      </View>
    )
  }
  renderImage = () => {
    const { chooseImage, showDashedImage } = this.state;
    return (
      chooseImage.map((url, index) => {
        return (
          <Gestures
            draggable={{
              y: true,
              x: true,
            }}
            scalable={{
              min: 0.1,
              max: 7,
            }}
            rotatable={true}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.handleCloseDashedImage()}
            >
              <View style={{
                borderWidth: showDashedImage ? 1 : 0,
                borderColor: '#eee',
                borderStyle: 'dashed',
                borderRadius: 1,
                position: 'relative',
              }}>
                <Image
                  source={{uri: url}}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
                {
                  showDashedImage ? (
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        right: -10,
                        top: -10,
                      }}
                      onPress={() => this.handleDaleteImage(index)}
                    >
                      <Svg 
                        width='23' 
                        height='23' 
                        svgXmlData={shanchu} 
                      />
                    </TouchableOpacity>
                  ) : null
                }
              </View>
            </TouchableOpacity>
          </Gestures>
        )
      })
    )
  }
  renderText = () => {
    const { chooseText, showDashedText } = this.state;
    return (
      chooseText.map((text, index) => {
        return (
          <Gestures
            draggable={{
              y: true,
              x: true,
            }}
            scalable={{
              min: 0.1,
              max: 7,
            }}
            rotatable={true}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.handleCloseDashedText()}
            >
              <View style={{
                borderWidth: showDashedText ? 1 : 0,
                borderColor: '#eee',
                borderStyle: 'dashed',
                borderRadius: 1,
                position: 'relative',
                padding: 5,
              }}>
                <Text>{text}</Text>
                {
                  showDashedText ? (
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        right: -10,
                        top: -10,
                      }}
                      onPress={() => this.handleDaleteText(index)}
                    >
                      <Svg 
                        width='23' 
                        height='23' 
                        svgXmlData={shanchu} 
                      />
                    </TouchableOpacity>
                  ) : null
                }
              </View>
            </TouchableOpacity>
          </Gestures>
        )
      })
    )
  }
  renderImageHeader = () => {
    return (
      <Header 
        title='预览图'
        left={
          <Svg width='23' height='23' svgXmlData={leftArrow} />
        }
        leftEvent={() => this.setState({showImage: false})}
        containerStyle={{
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#eee'
        }}
        right={
          <TouchableOpacity activeOpacity={0.9} onPress={this.handleDone}>
            <View style={{borderRadius: 50, paddingTop: 5, paddingBottom: 5, paddingRight: 11, paddingLeft: 11, backgroundColor: '#80AAFF'}}>
              <Text style={{fontSize: 13, color: '#fff'}}>完成</Text>
            </View>
          </TouchableOpacity>
        }
      ></Header>
    )
  }
  renderBack = () => {
    const { chooseBackImg } = this.state;
    return (
      <View style={{
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {
          chooseBackImg.map((item, index) => {
            return (
              <TouchableOpacity 
                style={{
                  width: 73,
                  height: 130,
                  borderRadius: 10,
                  overflow: 'hidden',
                }} 
                key={index} 
                activeOpacity={0.9}
                onPress={() => this.setState({backUrl: item.url})}
              >
                <View>
                  <Image
                    source={{uri: item.url}}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  ></Image>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
  componentDidMount = () => {
    // this.bottom.close();
  }
  render() {
    const { operations, snapPointsChoose, snapPointsBack, snapPointsText, chooseBack, value, x, y, z, textValue, showImage, accountImage, chooseTextColor, chooseDeep, chooseData, backUrl } = this.state;
    return (
      <View style={{position: 'relative', width: '100%', height: '100%'}}>
        <Header 
          title="创作手账"
          left={
            <Svg width='23' height='23' svgXmlData={leftArrow} />
          }
          leftEvent={this.handleReturnBack}
          containerStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#eee'
          }}
          right={
            <TouchableOpacity activeOpacity={0.9} onPress={this.handlePhoto}>
              <View style={{borderRadius: 50, paddingTop: 5, paddingBottom: 5, paddingRight: 7, paddingLeft: 7, backgroundColor: '#80AAFF'}}>
                <Text style={{fontSize: 13, color: '#fff'}}>下一步</Text>
              </View>
            </TouchableOpacity>
          }
          headerTextStyle={{
            fontFamily: 'wenyue1',
          }}
        ></Header>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <ImageBackground
          style={styles.createContainer(x, y, z , value)}
          ref={ref => this.account = ref}
          source={{uri: backUrl}}
        >
          {
            this.renderImage()
          }
          {
            this.renderText()
          }
        </ImageBackground>
        <ImageBackground 
          style={styles.operation}
          source={{uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F12%2F89%2FKa6aU5xpKN.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626181054&t=d5b7a91a27d7a410a66389d8e7fe7a48'}}
        >
          {
            operations.map((item, index) => {
              return (
                <TouchableOpacity activeOpacity={1} style={styles.operationItem} key={index} onPress={item.onPress}>
                  <View>
                    {/* <Svg width={item.icon.width} height={item.icon.height} svgXmlData={item.icon.name}/> */}
                    <Image 
                      source={{uri: item.icon.name}}
                      style={{
                        width: item.icon.width,
                        height: item.icon.height,
                      }}
                    />
                    <Text style={styles.itemText}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ImageBackground>
        <BottomSheet
          ref={ref => {
            this.chooseBack = ref;
          }}
          snapPoints={snapPointsChoose}
        >
          <BottomSheetFlatList
            data={chooseData}
            keyExtractor={i => i}
            renderItem={this.renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
        <BottomSheet
          ref={ref => {
            this.chooseDeep = ref;
          }}
          snapPoints={snapPointsChoose}
        >
          <BottomSheetFlatList
            data={chooseDeep}
            keyExtractor={i => i}
            renderItem={this.renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
        <BottomSheet
          ref={ref => {
            this.back = ref;
          }}
          snapPoints={snapPointsBack}
        >
          <ScrollableTabView
            initialPage={0}
            tabBarUnderlineStyle={{
              backgroundColor: '#7C83D5'
            }}
            tabBarActiveTextColor='#4D5BBE'
            tabBarInactiveTextColor="#101010"
            tabBarTextStyle={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            <View style={styles.backChoose} tabLabel='纯色'>
              <View style={styles.colorChoose}>
                {
                  chooseBack.map((item, index) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9} key={index} style={styles.itemColor} onPress={() => this.handleChangeBack(item)}>
                        <View style={{
                          ...styles.backColor,
                          backgroundColor: `rgba(${item.x}, ${item.y}, ${item.z}, 1)`,
                        }}></View>
                        <Text style={styles.backText}>{item.text}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
              <View style={styles.opacityChoose}>
                <Slider
                  style={{
                    width: 300,
                  }}
                  value={value*100}
                  maximumValue={100}
                  minimumValue={0}
                  onValueChange={(value) => this.handleChangeOpacity(value/100)}
                  trackStyle={{ height: 5, backgroundColor: '#D3D3D3' }}
                  thumbStyle={{ height: 17, width: 40, backgroundColor: 'transparent' }}
                  minimumTrackTintColor={'#FFF5EE'}
                  thumbProps={{
                    children: (
                      <View 
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 50,
                          backgroundColor: '#C0C0C0',
                        }}
                      />
                    ),
                  }}
                />
                <Text>透明度 {value}</Text>
              </View>
            </View>
            <View tabLabel='花色'>
              {
                this.renderBack()
              }
            </View>
          </ScrollableTabView>
        </BottomSheet>
        <BottomSheet
          ref={ref => {
            this.text = ref;
          }}
          snapPoints={snapPointsText}
        >
          <View style={styles.input}>
            <Input
              value={textValue}
              placeholder='请输入文字'
              inputStyle={{
                fontSize: 14,
                paddingTop: 0,
                paddingBottom: 0,
              }}
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#eee',
                borderStyle: 'solid',
                borderRadius: 10,
              }}
              rightIcon={
                <TouchableOpacity onPress={this.handleCheckText}>
                  <Svg width='30' height='30' svgXmlData={gou} />
                </TouchableOpacity>
              }
              onChangeText={value => this.handleText(value)}
            />
          </View>
          <View style={styles.textChoose}>
            {
              chooseTextColor.map((item, index) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} key={index} style={styles.itemColor} onPress={() => this.handleChooseText(item)}>
                    <View style={{
                      ...styles.backColor,
                      backgroundColor: `rgba(${item.x}, ${item.y}, ${item.z}, 1)`,
                    }}></View>
                    <Text style={styles.backText}>{item.text}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </BottomSheet>
        <Modal visible={showImage} transparent={true}>
          <ImageViewer 
            imageUrls={accountImage}
            onClick={() => { // 图片单击事件
              this.setState({showImage: false})
            }}
            renderHeader={this.renderImageHeader}
            renderIndicator={() => null}
            enableSwipeDown={false}
          />
        </Modal>
      </View>
    )
  }
}

export default CreateIndex