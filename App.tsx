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
  View,
  FlatList,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Platform,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  btnWrappper: {
    width: '50%',
  }
})

const App = () => {
  const listRef = useRef() as any
  const drawerRef = useRef() as any
  const getRandomList = useCallback(() => {
    return new Array(100).fill(0).map(() => ({ key: Math.floor(Math.random() * 100000).toString() }))
  }, [])
  const navigationView = useMemo(() => (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      <Button title='close' onPress={() => {
        drawerRef.current.closeDrawer()
      }} />
    </View>
  ), [])
  const [list, setList] = useState(getRandomList())
  const [disabled, setDisabled] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
      renderNavigationView={() => navigationView}>
      <View
        style={{ display: 'flex', flex: 1 }}
      >
        <FlatList
          ref={listRef}
          style={{ flexGrow: 1 }}
          ItemSeparatorComponent={({highlighted}) => (
            <View style={[highlighted && {marginLeft: 0, height: 10, backgroundColor: 'red', width: '100%'}]} />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true)
            setTimeout(() => {
              setList(getRandomList())
              setRefreshing(false)
            }, 2000);
          }}
          data={list}
          extraData={disabled}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              onPress={() => {}}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <Text style={disabled && {color: 'red'}}>{item.key}</Text>
            </TouchableHighlight>
          )}
          onEndReached={(info) => {
            console.log(info)
          }}
          progressViewOffset={50}
          onEndReachedThreshold={0.1}
        />
        <Button
          title='open open'
          onPress={() => {
            drawerRef.current.openDrawer()
          }}
        />
        <Button
          title='toggle disabled'
          onPress={() => {
            setDisabled(!disabled)
          }}
        />
        <Button
          title='scroll to end'
          onPress={() => {
            listRef.current.scrollToEnd()
          }}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default App;