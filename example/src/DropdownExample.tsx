import * as React from 'react';

import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { ClickOutsideProvider, useClickOutside } from 'react-native-click-outside';
import { Note } from './Components';

const options = ['One', 'Two', 'Three'];
export const DropdownExample = () => {
  const ref = useClickOutside<Text>(() => setIsOpen(false));
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | undefined>();
  return (
    <ClickOutsideProvider>
      <View style={styles.container}>
        <Button title="Click me" onPress={() => console.log('clicked')} />
        <View ref={ref} style={styles.dropdownContainer}>
          <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
            <Text style={styles.selected}>{selected || 'Choose'}</Text>
          </TouchableOpacity>
          {isOpen && (
            <View>
              {options.map((o) => (
                <TouchableOpacity
                  key={o}
                  onPress={() => {
                    setSelected(o);
                    setIsOpen(false);
                  }}
                >
                  <Text style={styles.item}>{o}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <Note>
          You can detect clicks outside of the dropdown and close it. {'\n\n'} Even if the dropdown is open, other
          elements (like "Click me" button) still can be accessible.
        </Note>
      </View>
    </ClickOutsideProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  dropdownContainer: {
    backgroundColor: '#ECF0F1',
    borderWidth: 2,
    borderColor: '#3498DB',
    borderRadius: 8,
  },
  selected: {
    fontWeight: 'bold',
    padding: 16,
  },
  item: { padding: 16 },
});
