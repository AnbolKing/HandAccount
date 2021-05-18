import React, { Component } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-scroll-head-tab-view';
import Masonry from '../../../components/masonry';
import { get } from '../../../utils/request';

class HandAccount extends Component {
  state = {
    page: 1,
    data: [],
  }
  handleInit = async () => {
    const { page } = this.state;
    let res = await get('https://api.thecatapi.com/v1/images/search', {
      params: {
        size: 'full',
        limit: 10,
        page,
      }
    });
    this.setState(prev => {
      return {
        ...prev,
        page: prev.page+1,
        data: res.data,
      }
    })
  }

  componentDidMount() {
    this.handleInit();
  }
  render() {
    const { data } = this.state;
    return (
      <ScrollView 
        {...this.props.props}
      >
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <Masonry 
            data={data}
          />
        </View>
      </ScrollView>
    );
  }
}

export default HandAccount