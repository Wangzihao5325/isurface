/*
  Copyright © SuperMap. All rights reserved.
  Author: Wang zihao
  E-mail: zihaowang5325@qq.com 
*/

import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, FlatList, Image,PixelRatio } from 'react-native';
import * as Util from '../../util/const_util';

import MT_Btn from './MT_Btn';

export default class LayerManager_item extends React.Component {
  constructor(props){

  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle:'solid',
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth:1,
    borderColor:'#bbbbbb'
  },
});