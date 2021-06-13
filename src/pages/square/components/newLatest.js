import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ShowItem from '../components/ShowItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '100%',
    flex: 1,
    paddingBottom: 20,
  }
})

const imgData_one = [
  {
    url: 'https://z3.ax1x.com/2021/06/12/24qJkd.png',
    id: '237268_ftb',
    text: '中秋·太阳'
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24qAw4.png',
    id: '24f34ftb',
    text: '端午节'
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24qETJ.png',
    id: '34f3',
    text: '中秋·灯笼'
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24qKl6.png',
    id: 'q34fq3',
    text: '端午·龙舟'
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24qmf1.png',
    id: '134f314t',
    text: '端午·粽子'
  }
]

const imgData_two = [
  {
    url: 'https://z3.ax1x.com/2021/06/12/24RW6A.png',
    text: '底纹',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24Rcfe.png',
    text: '底纹',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24RfOI.png',
    text: '底纹',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24R2SH.png',
    text: '底纹',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24RRld.png',
    text: '底纹',
  }  
]

const imgData_three = [
  {
    url: 'https://z3.ax1x.com/2021/06/12/24bIJI.png',
    text: '元宝'
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24boWt.png',
    text: '汤圆',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24bHQf.png',
    text: '红灯笼',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24b7SP.png',
    text: '中国结'
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/24bby8.png',
    text: '烟花'
  },
]

const imgData_four = [
  {
    url: 'https://z3.ax1x.com/2021/06/12/25Pa3F.png',
    text: '十二生肖·马',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25PU9U.png',
    text: '十二生肖·虎',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25PthT.png',
    text: '十二生肖·蛇',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25PYNV.png',
    text: '十二生肖·鸡',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25PJA0.png',
    text: '十二生肖·鼠',
  },
]

const imgData_five = [
  {
    url: 'https://z3.ax1x.com/2021/06/12/25C5kV.png',
    text: '福字',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25C2Os.png',
    text: '福字',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25Cgyj.png',
    text: '福字',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25CclQ.png',
    text: '福字',
  },
  {
    url: 'https://z3.ax1x.com/2021/06/12/25CDFf.png',
    text: '福字',
  },
]


class NewLatest extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <ShowItem 
              imgStyle={{
                width: 110,
                height: 115,
              }}
              title="节日贴纸"
              data={imgData_one}
            />
            <ShowItem 
              imgStyle={{
                width: 150,
                height: 200,
              }}
              title="手绘背景"
              data={imgData_two}
            />
            <ShowItem 
              imgStyle={{
                width: 110,
                height: 115,
              }}
              title="民俗道具"
              data={imgData_three}
            />
            <ShowItem 
              imgStyle={{
                width: 110,
                height: 115,
              }}
              title="十二生肖"
              data={imgData_four}
            />
            <ShowItem 
              imgStyle={{
                width: 110,
                height: 115,
              }}
              title="五福临门"
              data={imgData_five}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default NewLatest;