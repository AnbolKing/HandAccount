import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Animated, Easing, Dimensions, Text } from 'react-native';
import CircleItem from './item';

const { width } = Dimensions.get('window')
const RefreshStatus = {
  pullToRefresh: 0,
  releaseToRefresh: 1,
  refreshing: 2
}
const PaginationStatus = {
  firstLoad: 0,
  waiting: 1,
  allLoaded: 2
}
class CircleBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrowAngle: new Animated.Value(0),
      refreshStatus: RefreshStatus.pullToRefresh,
      refreshTitle: this.props.refreshableTitlePull,
    }
    this._offsetY = 0;
    this._isRefreshing = false;
    this._dragFlag = false;
  }
  handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset
    const { refreshViewHeight } = this.props
    if (y <= refreshViewHeight) {
      this._offsetY = y - refreshViewHeight
    }
    if (this._dragFlag) {
      if (!this._isRefreshing) {
        if (y <= 10) {
          if (this.state.refreshStatus !== RefreshStatus.releaseToRefresh) {
            this.setState({
              refreshStatus: RefreshStatus.releaseToRefresh,
              refreshTitle: this.props.refreshableTitleRelease
            })
          }
        } 
        else if (this.state.refreshStatus !== RefreshStatus.pullToRefresh) {
          this.setState({
            refreshStatus: RefreshStatus.pullToRefresh,
            refreshTitle: this.props.refreshableTitlePull
          })
        }
      }
    } 
    else if (y <= refreshViewHeight) {
      setTimeout(() => this._scrollview.scrollTo({ x: 0, y: refreshViewHeight, animated: true }), 100)
    }
    if (this.props.onScroll) {
      this.props.onScroll(event)
    }
  }
  handleScrollBeginDrag = (event) => {
    this._dragFlag = true;
    const { refreshViewHeight } = this.props;
    this._offsetY = event.nativeEvent.contentOffset.y - refreshViewHeight;
    if (this.props.onScrollBeginDrag) {
      this.props.onScrollBeginDrag(event)
    }
  }
  handleScrollEndDrag = (event) => {
    this._dragFlag = false
    const { y } = event.nativeEvent.contentOffset
    const { refreshViewHeight } = this.props
    this._offsetY = y - refreshViewHeight
    if (!this._isRefreshing) {
      if (this.state.refreshStatus === RefreshStatus.releaseToRefresh) {
        this._isRefreshing = true
        this.setState({
          refreshStatus: RefreshStatus.refreshing,
          refreshTitle: this.props.refreshableTitleRefreshing
        }, () => {
          this._scrollview.scrollTo({ x: 0, y: 0, animated: true })
          this.onRefreshEnd();  
        })
        // this._scrollview.scrollTo({ x: 0, y: 0, animated: true })
        // this.onRefreshEnd();
      } else if (y <= refreshViewHeight) {
        this._scrollview.scrollTo({ x: 0, y: refreshViewHeight, animated: true })
      }
    } else if (y <= refreshViewHeight) {
      this._scrollview.scrollTo({ x: 0, y: 0, animated: true })
    }
    if (this.props.onScrollEndDrag) {
      this.props.onScrollEndDrag(event)
    }
  }
  scrollTo = (option) => {
    this._scrollview.scrollTo(option)
  }

  scrollToEnd = (option) => {
    this._scrollview.scrollToEnd(option)
  }

  onRefreshEnd = () => {
    if (this.state.refreshStatus === RefreshStatus.refreshing) {
      this._isRefreshing = false
      setTimeout(() => {
        if (this._scrollview) {
          this._scrollview.scrollTo({ x: 0, y: this.props.refreshViewHeight, animated: true })
        }
        this.setState({
          refreshStatus: RefreshStatus.pullToRefresh,
          refreshTitle: this.props.refreshableTitlePull,
        })
      }, 1000)
    }
  }

  renderRefreshHeader() {
    if (this.props.customRefreshView) {
      return (
        <View style={[defaultHeaderStyles.header, this.props.refreshViewStyle]}>
          {this.props.customRefreshView(this.state.refreshStatus, this._offsetY)}
        </View>
      )
    }
    return (
      <View
        style={{
          ...defaultHeaderStyles.header,
          ...this.props.refreshViewStyle,
          height: this.props.refreshViewHeight,
        }}
      >
        <View style={defaultHeaderStyles.status}>
          {this.renderSpinner()}
          <Text style={defaultHeaderStyles.statusTitle}>{this.state.refreshTitle}</Text>
        </View>
      </View>
    )
  }

  renderSpinner() {
    if (this.state.refreshStatus === RefreshStatus.refreshing) {
      this.state.arrowAngle.setValue(0);
      Animated.loop(Animated.timing(this.state.arrowAngle, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false
      })).start();
      return (
        <Text>loading</Text>
      )
    }
    return null;
  }
  render() {
    return (
      <ScrollView
        ref={c => this._scrollview = c}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={100}
        overScrollMode='always'
        onScroll={this.handleScroll}
        onScrollEndDrag={this.handleScrollEndDrag}
        onScrollBeginDrag={this.handleScrollBeginDrag}
        style={{marginTop: 50}}
      >
        <View>
          {this.renderRefreshHeader()}
        </View>
        <View>
          <CircleItem />
          <CircleItem />
          <CircleItem />
        </View>
      </ScrollView>
    )
  }
}

CircleBody.defaultProps = {
  horizontal: false,
  scrollEnabled: true,
  header: null,
  refreshable: true,
  refreshableTitlePull: '下拉更新',
  refreshableTitleRefreshing: '',
  refreshableTitleRelease: '松开更新',
  customRefreshView: null,
  arrowImageStyle: undefined,
  refreshViewStyle: undefined,
  refreshViewHeight: 70,
  insideOfUltimateListView: false
}
const defaultHeaderStyles = StyleSheet.create({
  header: {
    width,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrow: {
    width: 22,
    height: 22,
  },
  statusTitle: {
    fontSize: 11,
    lineHeight: 16,
  }
})

export default CircleBody;