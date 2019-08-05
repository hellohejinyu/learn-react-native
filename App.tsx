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
  SectionList
} from 'react-native';


const App = () => {
  const overrideRenderItem = ({ item, index, section: { title, data } }: any) => <Text key={index}>Override{item}</Text>

  return (
      <Switch
        trackColor={{
          false: '#f00',
          true: '#0ff'
        }}
      />
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