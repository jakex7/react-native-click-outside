import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ClickOutsideProvider, useClickOutside } from 'react-native-click-outside';
import { Note } from './Components';

export const InsideOutsideExample = () => {
  const ref = useClickOutside<TouchableOpacity>(() => setResults('outside'), { triggerOnBlur: true });
  const [results, setResults] = React.useState<string | undefined>();

  return (
    <ClickOutsideProvider>
      <View style={styles.container}>
        <Text>Clicked: {results || 'none'}</Text>
        <TouchableOpacity ref={ref} style={styles.box} onPress={() => setResults('inside')} />
        <Note>You can detect clicks outside of the component.</Note>
      </View>
    </ClickOutsideProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  box: {
    width: 100,
    height: 100,
    marginVertical: 20,
    backgroundColor: '#2ECC71',
    borderRadius: 8,
  },
});
