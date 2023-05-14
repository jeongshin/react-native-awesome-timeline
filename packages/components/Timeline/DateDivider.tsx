import React from 'react';
import { View, useWindowDimensions } from 'react-native';

interface Props {
  lineColor: string;
  lineThickness: number;
  date: Date;
  height: number | undefined;
}

function DateDivider({ lineColor, lineThickness, height = 50 }: Props) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width,
          height: lineThickness,
          backgroundColor: lineColor,
        }}
      />
    </View>
  );
}

export default React.memo(DateDivider);
