import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F94%2F69%2F5acb472d449d2_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828498&t=8dd7be51d65bffaaf27ad64bfa4c60de',
    id: '237268_ftb',
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015e0e584ac637a8012060c802ecfc.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828549&t=9f73ae3ca6a0cd3ca404e27ea919e7df',
    id: '24f34ftb',
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201907%2F23%2F20190723105631_ZvHRe.thumb.700_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828637&t=5a3f5705c2a41ddaee031b7facc42a9f',
    id: '34f3',
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff27894cef0556abb5a69cc4264823e8999c198a4fbe6-Yj3K51_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828655&t=79c4b70d1fb6cad34f4a875418aa6291',
    id: 'q34fq3',
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F08%2Fcedc8a86ff877ae207f20965a6e33348.jpg%21%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623828672&t=79243e7f6740ff16f067c23b4bcd1ef4',
    id: '134f314t',
  }
]

const imgData_two = [
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
  }
]

const imgData_three = [
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
]


const JingXuan = () => {
  return (
    <View style={styles.container}>
      <ShowItem 
        imgStyle={{
          width: 110,
          height: 115,
        }}
        title="最新贴纸"
        data={imgData_one}
      />
      <ShowItem 
        imgStyle={{
          width: 150,
          height: 200,
        }}
        title="最新背景"
        data={imgData_two}
      />
      <ShowItem 
        imgStyle={{
          width: 110,
          height: 115,
        }}
        title="最新画笔"
        data={imgData_three}
      />
    </View>
  )
}

export default JingXuan;