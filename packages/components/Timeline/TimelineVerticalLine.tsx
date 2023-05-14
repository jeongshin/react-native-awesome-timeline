import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import { toPxUnit } from './utils';

interface Props {
  lineThickness: number;
  labelContentsWidth: number | string;
  lineColor: string;
}

const TimelineVerticalLine = ({
  labelContentsWidth,
  lineColor,
  lineThickness,
}: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        width: lineThickness,
        height: '100%',
        backgroundColor: lineColor,
        position: 'absolute',
        left: toPxUnit(labelContentsWidth, width) / 2 - lineThickness / 2,
      }}
    />
  );
};

export default React.memo(TimelineVerticalLine);
