/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback, useRef, useMemo, useState } from 'react';
import {
  Button,
  View,
  FlatList,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Platform,
  Image
} from 'react-native';


const App = () => {
  return (
    <Image
      source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=144388917,3393541021&fm=26&gp=0.jpg'}}
      style={{ 
        width: 160,
        height: 90,
        borderRadius: 15,
        overlayColor: 'red'
      }}
    />
  );
};

export default App;