/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import DraftJsText from './DraftJsText';
import type { OrderedListItemPropsType } from './types';

const styles = StyleSheet.create({
  orderedListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderedListItemNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const OrderedListItem = (props: OrderedListItemPropsType): any => {
  const {
    counter,
    separator,
    customStyles,
    depth,
    depthMargin,
    noDepthMargin,
  } = props;

  const orderedListItemCustomStyleContainer = customStyles && customStyles.orderedListItemContainer;
  const orderedListItemCustomStyleNumber = customStyles && customStyles.orderedListItemNumber;

  const marginLeftWithDepth = (
    orderedListItemCustomStyleNumber && orderedListItemCustomStyleNumber.marginLeft)
    ? depth * orderedListItemCustomStyleNumber.marginLeft : depth * depthMargin;

  const marginLeft = depth > 0 ? marginLeftWithDepth : noDepthMargin;

  return (
    <View style={[styles.orderedListItemContainer, orderedListItemCustomStyleContainer]}>
      <Text
        style={[styles.orderedListItemNumber, orderedListItemCustomStyleNumber, { marginLeft }]}
      >
        {counter}
        {separator}
      </Text>
      <DraftJsText
        {...props}
      />
    </View>
  );
};

OrderedListItem.defaultProps = {
  counter: 1,
  depth: 0,
  separator: '.',
  depthMargin: 8,
  noDepthMargin: 0,
};

export default OrderedListItem;
