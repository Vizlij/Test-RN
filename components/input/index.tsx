import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type InputProps = {
  value: string;
}

const Input = ({ value }: InputProps): JSX.Element => <TextInput value={value} editable={false} style={styles.input} />

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 5
  },
});

export default Input;
