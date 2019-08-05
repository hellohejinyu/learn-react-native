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
  StatusBar,
  SectionList
} from 'react-native';


const App = () => {
  const overrideRenderItem = ({ item, index, section: { title, data } }: any) => <Text key={index}>Override{item}</Text>

  return (
    <>
      <StatusBar translucent={true} backgroundColor="blue" barStyle="dark-content" />
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: 'Title1', data: ['item1', 'item2']},
          {title: 'Title2', data: ['item3', 'item4']},
          {title: 'Title3', data: ['item5', 'item6']},
        ]}
        keyExtractor={(item, index) => item + index}
      />
      <SectionList
        renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
        sections={[
          { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title3', data: ['item5', 'item6'] },
        ]}
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