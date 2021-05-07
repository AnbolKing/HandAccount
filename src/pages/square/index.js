import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import CustormerBar from '../../components/CustormerBar';
import Recommend from "./components/Recommend";
import Latest from "./components/Latest";
class SquareIndex extends Component {
  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <CustormerBar />}
      >
        <Recommend tabLabel='推荐' />
        <Latest tabLabel='最新' />
      </ScrollableTabView>
    )
  }
}

export default SquareIndex