import React, { Component } from 'react';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import CustormerBar from '../../components/CustormerBar';
import Recommend from "./components/Recommend";
// import Latest from "./components/Latest";
import NewLatest from './components/newLatest';
class SquareIndex extends Component {
  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <CustormerBar showIcon={true}/>}
      >
        <Recommend tabLabel='推荐' />
        <NewLatest tabLabel='素材' />
      </ScrollableTabView>
    )
  }
}

export default SquareIndex