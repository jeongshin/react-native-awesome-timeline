import React, { ReactNode } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';

import { toPxUnit } from '../../utils';

interface Props {
  size: number | string;
  padding: number;
  paddingColor: string;
  children?: ReactNode;
}

function TimelineLabel({ size, padding, paddingColor, children }: Props) {
  const { width } = useWindowDimensions();

  const sizeInPx = toPxUnit(size, width);

  return (
    <View
      style={StyleSheet.flatten([
        {
          position: 'absolute',
          width: sizeInPx,
          height: sizeInPx,
          borderRadius: sizeInPx,
          backgroundColor: paddingColor,
          padding,
        },
      ])}>
      {children}
    </View>
  );
}

export default React.memo(TimelineLabel);
