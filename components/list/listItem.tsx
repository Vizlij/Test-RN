import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import { NUMBER_ROWS, MINUS_HEIGHT } from './constants';

type ListItemProps = {
  item: number;
  height: number;
  onAction: (coordinates: string) => void;
}

const ListItem = ({ item, height, onAction }: ListItemProps): JSX.Element => {
  const [coordinates, setCoordinates] = useState<string>('');

  const handleCoordinates = useCallback(({ nativeEvent }) => {
    const { layout } = nativeEvent;
    setCoordinates(`x=${layout.x} y=${layout.y}`)
  }, [])

  return (
    <View
      style={styles(height).item}
      onLayout={handleCoordinates}
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
  },
});

export default ListItem;
