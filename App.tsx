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
    <View>
      <TouchableNativeFeedback
        onPress={() => {}}
      >
        <View style={{ height: 60 }}>
          <Text>TouchableHighlight</Text>
        </View>
      </TouchableNativeFeedback>
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