import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { SimpleExample } from './SimpleExample';
import { DropdownExample } from './DropdownExample';
import { InsideOutsideExample } from './InsideOutsideExample';

const stages = ['simple', 'click inside/outside', 'dropdown'] as const;
export default function App() {
  const [stage, setStage] = React.useState<(typeof stages)[number] | undefined>();
  if (stage === 'simple') return <SimpleExample />;
  if (stage === 'dropdown') return <DropdownExample />;
  if (stage === 'click inside/outside') return <InsideOutsideExample />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>react-native-click-outside</Text>
      <ScrollView style={styles.container}>
        {stages.map((s) => (
          <TouchableOpacity onPress={() => setStage(s)} key={s} style={styles.button}>
            <Text style={styles.label}>{s}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { textAlign: 'center', fontSize: 24, margin: 16 },
  button: {
    marginBottom: 16,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495E',
    padding: 16,
    borderRadius: 8,
  },
  label: { color: '#FFF', fontWeight: 'bold', textTransform: 'capitalize' },
});
