import React, { FC, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { range } from 'lodash';

import Input from '../input';
import ListItem from './listItem';

import { useWindowSize } from '../../utils';
import { NUMBER_COLUMNS } from './constants';

const List: FC = () => {
  const [_, height] = useWindowSize();

  const [value, setValue] = useState<string>('');

  const onAction = useCallback((coordinates: string) => {
    setValue(coordinates);
  }, [])

  const renderItem = useCallback(({ item }) =>
    <ListItem item={item} height={height} onAction={onAction} />,
    [height, onAction]
  )

  return (
    <FlatList
      ListHeaderComponent={<Input value={value} />}
      style={styles.container}
      data={range(20)}
      numColumns={NUMBER_COLUMNS}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default List;
