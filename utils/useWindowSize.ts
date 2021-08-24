import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useWindowSize = () => {
  const [size, setSize] = useState <Array<number>>([
    Dimensions.get('window').width,
    Dimensions.get('window').height
  ]);

  useEffect(() => {
    Dimensions.addEventListener(
      'change',
      ({ window: { width, height } }) => setSize([width, height])
    );
  }, []);

  return size;
}

export default useWindowSize;
