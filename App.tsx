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
  ScrollView,
  RefreshControl,
  Modal,
  Picker
} from 'react-native';


const App = () => {
  const [refreshing, setRefreshing] = useState(false)

  return (
    <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={['#f00', '#0f0', '#00f']}
            progressBackgroundColor='#000'
            onRefresh={() => {
              console.log('true')
              setRefreshing(true)
              setTimeout(() => {
                console.log('false')
                setRefreshing(false)
              }, 1000);
            }}
          />
        }
      >
        <Text>xxx</Text>
      </ScrollView>
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