import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import TimelineLabelContents from '../TimelineLabelContents';

describe('<TimelineLabelContents />', () => {
  it('renders children', () => {
    const text = `Label Contents`;
    const { getByText } = render(
      <TimelineLabelContents
        labelContentsWidth="30%"
        lineThickness={2}
        labelSize={14}
        labelTopOffset={4}
        lineColor="blue"
        testID="timeline-label-contents">
        <Text>{text}</Text>
      </TimelineLabelContents>,
    );

    const label = getByText(text);

    expect(label).toBeTruthy();
  });
});
