/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import * as Util from '../util/const_util';

const bgColor = 'transparent';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  _btnPress = () => {
    this.setState(
      (oldState) => {
        let newState = !oldState.checked;
        return {
          checked: newState,
        }
      },
      (() => {
        this.props.onChange(this.state.checked);
      }).bind(this)
    );
  }

  render() {
    const size = this.props.size ? { width: this.props.size, height: this.props.size } : { width: 20, height: 20 };
    const imagePath = this.state.checked ? require('../../image/checkbox-yes.png') : require('../../image/checkbox-no.png');
    return (
      <TouchableHighlight style={[styles.btn, size]} onPress={this._btnPress} underlayColor={bgColor}>
        <Image style={[styles.btn_image, size]} source={imagePath} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: bgColor,
  },
  btn_image: {
    height: 20,
    width: 20,
  },
});