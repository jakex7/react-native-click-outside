import { StyleSheet, Text } from 'react-native';
import * as React from 'react';

export const Note = ({ children }: { children: React.ReactNode }) => <Text style={styles.note}>Note: {children}</Text>;

const styles = StyleSheet.create({
  note: { margin: 30, textAlign: 'center', fontStyle: 'italic' },
});
