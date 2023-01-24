/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

// @flow

import {
  StyleSheet,
  Platform,
} from 'react-native';

const defaultStyles = (PlatformOS: string): Object => StyleSheet.create({
  paragraph: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  unstyled: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'header-one': {
    fontSize: 32,
    marginTop: 22,
    marginBottom: 22,
  },
  'header-two': {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  'header-three': {
    fontSize: 19,
    marginTop: 19,
    marginBottom: 19,
  },
  'header-four': {
    fontSize: 15,
    marginTop: 21,
    marginBottom: 21,
  },
  'header-five': {
    fontSize: 13,
    marginTop: 22,
    marginBottom: 22,
  },
  'header-six': {
    fontSize: 11,
    marginTop: 25,
    marginBottom: 25,
  },
  'unordered-list-item': {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'ordered-list-item': {
    fontSize: 14,
    fontWeight: 'normal',
  },
  'code-block': {
    backgroundColor: '#cecece',
    fontFamily: PlatformOS === 'android' ? 'monospace' : 'Courier New',
    padding: 16,
  },
  blockquote: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginLeft: 16,
  },
});

export { defaultStyles as defaultStylesForTest };
export default defaultStyles(Platform.OS);
