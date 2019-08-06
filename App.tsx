/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useCallback, useRef, useMemo, useState } from 'react';
import {
  StyleSheet,
  ToolbarAndroid,
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';


const App = () => {
  const [text, setText] = useState('')
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ccc'
      }}
      onMoveShouldSetResponder={(e) => {
        console.log('move set')
        if (e.nativeEvent.pageY > 400) {
          return true
        }
        return false
      }}
      // onStartShouldSetResponder={(e) => {
      //   if (e.nativeEvent.pageY < 400) {
      //     return true
      //   }
      //   return false
      // }}
      onResponderStart={() => {
        console.log('start')
      }}
      onResponderMove={(e) => {
        console.log('move')
      }}
    >
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