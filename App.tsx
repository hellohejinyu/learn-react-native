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
  Text,
  ProgressBarAndroid,
  StyleSheet,
  View,
  Modal,
  Picker
} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <ProgressBarAndroid />
      <ProgressBarAndroid styleAttr="Horizontal" />
      <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
});

export default App;