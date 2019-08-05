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
  Text
} from 'react-native';


const App = () => {
  const [text, setText] = useState('')
  return (
    <View>
      <ToolbarAndroid
        style={{ height: 56, backgroundColor: '#ccc' }}
        title='什么情况'
        logo={{ uri: 'https://www.baidu.com/favicon.ico' }}
        actions={[
          {
            title: '测试一',
            show: 'always'
          }
        ]}
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