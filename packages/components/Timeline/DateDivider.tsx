import React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  StyleProp,
  TextStyle,
  StyleSheet,
} from 'react-native';

interface Props {
  lineColor: string;
  date: Date;
  height: number | undefined;
  horizontalDividerThickness: number;
  showsHorizontalDivider: boolean;
  dividerTextStyle?: StyleProp<TextStyle>;
  dividerTextFormatter?: (date: Date) => string;
}

function DateDivider({
  lineColor,
  height = 50,
  date,
  showsHorizontalDivider,
  horizontalDividerThickness,
  dividerTextStyle,
  dividerTextFormatter,
}: Props) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {showsHorizontalDivider && (
        <View
          style={{
            width,
            height: horizontalDividerThickness,
            backgroundColor: lineColor,
            position: 'absolute',
          }}
        />
      )}
      <Text
        style={StyleSheet.flatten([
          {
            color: '#888888',
            padding: 12,
            backgroundColor: '#ffffff',
          },
          dividerTextStyle,
        ])}>
        {dividerTextFormatter
          ? dividerTextFormatter(date)
          : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
      </Text>
    </View>
  );
}

export default React.memo(DateDivider);
