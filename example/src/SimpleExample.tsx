import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { ClickOutsideProvider, useClickOutside } from 'react-native-click-outside';
import { Note } from './Components';

export const SimpleExample = () => {
  const refA = useClickOutside<Text>(() => console.log('clicked outside A'));
  const refB = useClickOutside<Text>(() => console.log('clicked outside B'));
  return (
    <ClickOutsideProvider activateOnSwipe>
      <View style={styles.container}>
        <Text ref={refA}>AAAAAAA</Text>
        <Text ref={refB}>BBBBBBB</Text>
        <Note>Press inside/outside Text component and see console for the results</Note>
      </View>
    </ClickOutsideProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
