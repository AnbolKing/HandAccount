import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-scroll-head-tab-view';
import AccountBook from '../../../components/accountBook';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
class Collection extends Component {
  render() {
    return (
      <ScrollView 
        {...this.props.props}
      >
        <View style={styles.container}>
          <AccountBook
            title="我的时光手账本"
            num={10}
            imgUrl='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11974568858%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623910859&t=fb1b83aecc631854b763479ea116bc34'
          />
          <AccountBook 
            title="天朝二十四节气"
            num={1}
            imgUrl='https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200414%2Fb90ecf3eef674507af7cee379897d2d8.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623910947&t=0127cb476e91111ecac13318781f8e83'
          />
          <AccountBook 
            title="四季三餐两人一生"
            num={6}
            private={true}
            imgUrl='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2FQmfGYXu2s89PQnR4rp3zUyKTkZE2oTsFXJ5eSphaP77TD1557730980631.jpeg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623910962&t=ed65c9cb85763ef7533618de11643c2e'
          />
        </View>
      </ScrollView>
    );
  }
}

export default Collection