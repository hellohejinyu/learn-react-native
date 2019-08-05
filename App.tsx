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
  TouchableHighlight
} from 'react-native';


const App = () => {
  const [text, setText] = useState('')
  return (
    <View>
      <TouchableHighlight
        onHideUnderlay={() => {
          console.log('hideUnderlay')
        }}
        onShowUnderlay={() => {
          console.log('showUnderlay')
        }}
        underlayColor='#ccc'
        onPress={() => {}}
        activeOpacity={.1}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
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