import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-scroll-head-tab-view';
import AccountBook from '../../../components/accountBook';
import Finger from '../../../components/Finger';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

const collections = [
  {
    title: "我的时光手账本",
    num: 10,
    private: false,
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11974568858%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623910859&t=fb1b83aecc631854b763479ea116bc34',
  },
  {
    title: "天朝二十四节气",
    num: 1,
    private: false,
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2Fb90ecf3eef674507af7cee379897d2d8.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623910947&t=0127cb476e91111ecac13318781f8e83',
  },
  {
    title: "四季三餐两人一生",
    num: 6,
    private: true,
    imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2FQmfGYXu2s89PQnR4rp3zUyKTkZE2oTsFXJ5eSphaP77TD1557730980631.jpeg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623910962&t=ed65c9cb85763ef7533618de11643c2e',
  }
]
class Collection extends Component {
  state = {
    showFinger: false,
  }
  handleChoose = (item) => {
    if(item.private) {
      this.setState({
        showFinger: true,
      })
    }
  }
  handleSuccess = () => {
    alert('success')
  }
  render() {
    const { showFinger } = this.state;
    return (
      <>
        <ScrollView 
          {...this.props.props}
        >
          <View style={styles.container}>
            {
              collections.map(item => {
                return (
                  <AccountBook
                    pressEvent={() => this.handleChoose(item)}
                    title={item.title}
                    num={item.num}
                    imgUrl={item.imgUrl}
                    private={item.private}
                  />
                )
              })
            }
          </View>
        </ScrollView>
        {
          showFinger ? 
          <Finger 
            close={() => {
              this.setState({showFinger: false})
            }}
            success={() => {
              this.handleSuccess();
            }}
          /> : 
          null
        }
      </>
    );
  }
}

export default Collection