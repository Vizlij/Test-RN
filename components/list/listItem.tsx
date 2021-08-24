import React, { useCallback, useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import { NUMBER_ROWS, MINUS_HEIGHT } from './constants';

type ListItemProps = {
  item: number;
  height: number;
  onAction: (coordinates: string) => void;
}

const ListItem = ({ item, height, onAction }: ListItemProps): JSX.Element => {
  const [coordinates, setCoordinates] = useState<string>('');

  const myRef = useRef<any>();

  useEffect(() => {
    if (myRef?.current) {
      handleCoordinates();
    }
  }, [myRef.current, height])

  const handleCoordinates = useCallback(async () => {
    await myRef?.current?.measureInWindow(
      (x: number, y: number) => setCoordinates(`x=${x.toFixed(2)} y=${y.toFixed(2)}`)
    );
  }, [])

  return (
    <View
      ref={myRef}
      style={styles(height).item}
      key={item}
    >
      <TouchableOpacity
        style={styles().button}
        onPress={() => onAction(coordinates)}
      >
        <Text style={styles().buttonText}>
          {coordinates || 'Loading...'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = (height?: any) => StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: (height - MINUS_HEIGHT) / NUMBER_ROWS,
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D243D',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ListItem;
