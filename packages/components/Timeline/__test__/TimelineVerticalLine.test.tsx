import { render } from '@testing-library/react-native';
import React from 'react';

import TimelineVerticalLine from '../TimelineVerticalLine';

describe('<TimelineVerticalLine />', () => {
  it('renders with correct styles', () => {
    const { getByTestId } = render(
      <TimelineVerticalLine
        labelContentsWidth={50}
        lineColor="red"
        lineThickness={2}
        testID="vertical-line"
      />,
    );

    const verticalLine = getByTestId('vertical-line');

    expect(verticalLine.props.style).toMatchObject({
      width: 2,
      height: '100%',
      backgroundColor: 'red',
      position: 'absolute',
      left: 24,
    });
  });
});
