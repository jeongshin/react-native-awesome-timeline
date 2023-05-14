import React, { ReactNode } from 'react';
import { View, useWindowDimensions } from 'react-native';

import TimelineVerticalLine from './TimelineVerticalLine';
import { toPxUnit } from './utils';

interface Props {
  children?: ReactNode;
  labelContentsWidth: number | string;
  lineThickness: number;
  labelSize: number | string;
  labelTopOffset: number;
  lineColor: string;
}

function TimelineLabelContents({
  children,
  labelContentsWidth,
  lineThickness,
  labelSize,
  labelTopOffset,
  lineColor,
}: Props) {
  const { width } = useWindowDimensions();

  const halfWidthInPx = toPxUnit(labelContentsWidth, width) / 2;

  const labelSizeInPx = toPxUnit(labelSize, width);

  return (
    <View style={{ width: labelContentsWidth, flexDirection: 'row' }}>
      <TimelineVerticalLine
        lineThickness={lineThickness}
        labelContentsWidth={labelContentsWidth}
        lineColor={lineColor}
      />
      <View
        style={{
          position: 'absolute',
          top: labelTopOffset,
          left: halfWidthInPx - labelSizeInPx / 2,
          width: labelSizeInPx,
        }}>
        {children}
      </View>
    </View>
  );
}

export default React.memo(TimelineLabelContents);
