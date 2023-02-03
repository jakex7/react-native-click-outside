import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { ClickOutsideProvider, useClickOutside } from 'react-native-click-outside';

export default function App() {
  const refA = useClickOutside<Text>(() => console.log('clicked outside A'));
  const refB = useClickOutside<Text>(() => console.log('clicked outside B'));
  return (
    <ClickOutsideProvider activateOnSwipe>
      <View style={styles.container}>
        <Text ref={refA}>AAAAAAA</Text>
        <Text ref={refB}>BBBBBBB</Text>
      </View>
    </ClickOutsideProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
