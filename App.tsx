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
  Button,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Switch,
  StatusBar,
  SectionList,
  TextInput
} from 'react-native';


const App = () => {
  const [text, setText] = useState('')
  return (
    <>
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder='holder'
        onSubmitEditing={() => {
          console.log('gogo')
        }}
      />
    </>
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