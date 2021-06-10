import React, { Component } from 'react';
import { 
  View, 
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
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
// import { DownloadLocalImage } from '../../utils/SaveImage';

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
    backgroundColor: 'rgba(238, 238, 238, 0.6)',
    paddingTop: 10,
    paddingBottom: 5,
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
          name: image,
          width: 35,
          height: 35
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
          name: beijing,
          width: 35,
          height: 35
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
          name: wenben,
          width: 35,
          height: 35
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
          name: huabi,
          width: 35,
          height: 35
        },
        text: '画笔',
        onPress: () => {
          this.setState({
            chooseIndex: 4
          })
          this.handleChoose()
        }
      },
      {
        icon: {
          name: tiezhi,
          width: 35,
          height: 35
        },
        text: '贴纸',
        onPress: () => {
          this.setState({
            chooseIndex: 4
          })
          this.handleChoose()
        }
      },
    ],
    chooseData: [
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F94%2F69%2F5acb472d449d2_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828498&t=8dd7be51d65bffaaf27ad64bfa4c60de',
        id: '237268_ftb',
        onPress: () => this.handleCheckImage('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F94%2F69%2F5acb472d449d2_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828498&t=8dd7be51d65bffaaf27ad64bfa4c60de'),
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015e0e584ac637a8012060c802ecfc.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828549&t=9f73ae3ca6a0cd3ca404e27ea919e7df',
        id: '24f34ftb',
        onPress: () => this.handleCheckImage('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015e0e584ac637a8012060c802ecfc.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828549&t=9f73ae3ca6a0cd3ca404e27ea919e7df'),
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201907%2F23%2F20190723105631_ZvHRe.thumb.700_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828637&t=5a3f5705c2a41ddaee031b7facc42a9f',
        id: '34f3',
        onPress: () => this.handleCheckImage('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201907%2F23%2F20190723105631_ZvHRe.thumb.700_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828637&t=5a3f5705c2a41ddaee031b7facc42a9f'),
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff27894cef0556abb5a69cc4264823e8999c198a4fbe6-Yj3K51_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828655&t=79c4b70d1fb6cad34f4a875418aa6291',
        id: 'q34fq3',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F08%2Fcedc8a86ff877ae207f20965a6e33348.jpg%21%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828672&t=79243e7f6740ff16f067c23b4bcd1ef4',
        id: '134f314t',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic31.nipic.com%2F20130720%2F12342023_203825299000_2.jpg&refer=http%3A%2F%2Fpic31.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828791&t=1fddc1d2ae808912b56f10a540600d41',
        id: '237268_ftb',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200306%2F1b1d96b013c24fb48873a497b73aadce.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828815&t=8934ccf1bb29c0a28df633e2982513c4',
        id: '24f34ftb',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff27894cef0556abb5a69cc4264823e8999c198a4fbe6-Yj3K51_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828655&t=79c4b70d1fb6cad34f4a875418aa6291',
        id: 'q34fq3',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F08%2Fcedc8a86ff877ae207f20965a6e33348.jpg%21%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828672&t=79243e7f6740ff16f067c23b4bcd1ef4',
        id: '134f314t',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic31.nipic.com%2F20130720%2F12342023_203825299000_2.jpg&refer=http%3A%2F%2Fpic31.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828791&t=1fddc1d2ae808912b56f10a540600d41',
        id: '237268_ftb',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200306%2F1b1d96b013c24fb48873a497b73aadce.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828815&t=8934ccf1bb29c0a28df633e2982513c4',
        id: '24f34ftb',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cpnic.com%2FUploadFiles%2Fimg_0_3112340721_754518423_26.jpg&refer=http%3A%2F%2Fwww.cpnic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828896&t=2f3f6ccedcca0736abcf9d8bf6ea87c1',
        id: '34f3',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F18%2F20171118001133_vytPB.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828919&t=d7487c07e89ac3c832d5220f0a59b92b',
        id: 'q34fq3',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F06%2F20160906222422_LFTyi.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828936&t=d62aa07496e5ce0760389c3ad7b13836',
        id: '134f314t',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F908c7a2cf9bf480ca5360074d889669f024cf86f10696-4zhwon_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623829105&t=2235e1644d2656b533b626eb18666a57',
        id: '237268_ftb',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0164485c49566da801203d22de83e0.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623829138&t=3d9ad312d272965bef070890d8fcd20d',
        id: '24f34ftb',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F19%2F04%2F26%2F11154f34c1ea93584209f1b10b1d67f0.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623829162&t=42b70919c1c563864c1d4a7c36aefa19',
        id: '34f3',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F18%2F04%2F29%2F820e4324e5c616d21f5912308f8058d4.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623829263&t=fae9b2894dd368a634d61cd8ed18af18',
        id: 'q34fq3',
      },
      {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F66e4ae041d20ca7f73fc99b989a09dbe4594dbd2128f0-lDWkgp_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623829279&t=0bf67a7b5ce25263172d0c1c1666e1a9',
        id: '134f314t',
      }
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
    snapPointsChoose: ['0%', '18%', '35%'],
    snapPointsBack: ['0%', '35%'],
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
  handleChoose = () => {
    this.bottom.snapTo(2);
  }
  handleClose = () => {
    this.bottom.close();
  }
  handlechooseData = () => {
    const { chooseIndex, chooseData } = this.state;
    if(chooseIndex === 4) {
      return chooseData
    }
    if(chooseIndex === 5) {
      return chooseData
    }
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
  handleDone = () => {
    this.context.navigate('TabBar');
    // const { accountUrl } = this.state;
    // DownloadLocalImage(accountUrl)
    // .then(res => {
    //   if(res.statusCode==200){
    //     alert('图片保存成功')
    //   }
    //   else{
    //     alert('图片保存失败')
    //   }
    // })
    // .catch((error)=>{
    //   alert('图片保存失败')
    //   console.log(error)
    // })
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContainer} key={item.id} activeOpacity={0.9} onPress={item.onPress}>
        <View>
          <Image
            source={{uri: item.url}}
            style={styles.imageContainer}
          ></Image>
        </View>
      </TouchableOpacity>
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
  componentDidMount() {
    this.bottom.close();
  }
  render() {
    const { operations, snapPointsChoose, snapPointsBack, snapPointsText, chooseBack, value, x, y, z, textValue, showImage, accountImage, chooseTextColor } = this.state;
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
        ></Header>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <View style={styles.createContainer(x, y, z , value)} ref={ref => this.account = ref}>
          {
            this.renderImage()
          }
          {
            this.renderText()
          }
        </View>
        <View style={styles.operation}>
          {
            operations.map((item, index) => {
              return (
                <TouchableOpacity activeOpacity={1} style={styles.operationItem} key={index} onPress={item.onPress}>
                  <View>
                    <Svg width={item.icon.width} height={item.icon.height} svgXmlData={item.icon.name} />
                    <Text style={styles.itemText}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <BottomSheet
          ref={ref => {
            this.bottom = ref;
          }}
          snapPoints={snapPointsChoose}
        >
          <BottomSheetFlatList
            data={this.handlechooseData()}
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
          <View style={styles.backChoose}>
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