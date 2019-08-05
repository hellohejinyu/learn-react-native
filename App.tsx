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
    <Fragment>
      <ScrollView
        endFillColor='#f00'
      >
        <View style={{ height: 1600 }}>
          <View>
            <Text>
              hello worldhello worldhello world
              hello worldhello worldhello world
              hello worldhello worldhello world
            </Text>
          </View>
        </View>
      </ScrollView>
      <Button title='nice' onPress={() => {}} />
    </Fragment>
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