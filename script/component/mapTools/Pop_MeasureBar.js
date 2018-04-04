/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
import * as Util from '../../util/const_util';

const CONTAINER_HEIGHT = 1.4 * 0.75 * 0.1 * Util.WIDTH;

export default class Pop_MeasureBar extends React.Component {

  _floutTrans = (number) => {
    number = number * 100;
    number = Math.round(number);
    number = number / 100;
    return number;
  }

  render() {
    let props = { ...this.props };
    let result = this.props.result;
    let showNum = this._floutTrans(result);
    return (
      <View style={styles.container}{...props}>
        <View style={styles.inner}>
          <View style={styles.btnContainer}>
            <TouchableHighlight style={styles.btn} onPress={this.props.measureLine} underlayColor={Util.UNDERLAYCOLOR}><Image style={styles.image} source={require('../../../image/measure_line.png')}></Image></TouchableHighlight>
            <TouchableHighlight style={styles.btn} onPress={this.props.measureSquare} underlayColor={Util.UNDERLAYCOLOR}><Image style={styles.image} source={require('../../../image/measure_square.png')}></Image></TouchableHighlight>
            <TouchableHighlight style={styles.btn} onPress={this.props.measurePause} underlayColor={Util.UNDERLAYCOLOR}><Image style={styles.image} source={require('../../../image/pause.png')}></Image></TouchableHighlight>
          </View>
          <Text>{showNum}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 0.5 * Util.WIDTH,
    backgroundColor: 'white',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width: 0.5 * Util.WIDTH,
  },
  btnContainer: {
    height: 40,
    width: 160,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    height: 30,
    width: 30,
  },
  image: {
    height: 30,
    width: 30,
  },
});