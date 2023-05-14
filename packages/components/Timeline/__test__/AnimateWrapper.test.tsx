import { render } from '@testing-library/react-native';
import React from 'react';

import AnimateWrapper from '../AnimateWrapper';

describe('AnimateWrapper', () => {
  const sharedViewableItems = { value: [] };
  const index = 0;
  const height = 100;

  it('should render without error', () => {
    const { getByTestId } = render(
      <AnimateWrapper
        sharedViewableItems={sharedViewableItems}
        index={index}
        height={height}>
        <></>
      </AnimateWrapper>,
    );

    const animateWrapper = getByTestId('item-0');
    expect(animateWrapper).toBeDefined();
  });

  // TODO add test code
});
