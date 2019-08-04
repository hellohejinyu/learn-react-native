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
  View,
  Modal,
} from 'react-native';


const App = () => {
  const [v, setV] = useState(false)
  return (
    <View>
      <Modal
        animationType='slide'
        visible={v}
        transparent={true}
        onDismiss={() => {
          console.log('dismiss')
        }}
        onRequestClose={() => {
          console.log('requestClose')
          setV(false)
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, .6)',
            padding: 16,
            height: 300,
            width: 200,
            marginTop: 50
          }}
        >
          <Text>Hello World</Text>
          <Button
            title='close'
            onPress={() => {
              setV(false)
            }}
          />
        </View>
      </Modal>
      <Button
        title='show'
        onPress={() => {
          setV(true)
        }}
      />
    </View>
  );
};

export default App;