import { render } from '@testing-library/react-native';
import { format } from 'date-fns';
import React from 'react';
import { ListRenderItem, View, Text, ViewStyle } from 'react-native';

import Timeline from '..';
import { TimelineType } from '../../..';
import { getAllDates } from '../../../utils';

describe('<Timeline />', () => {
  it('should render item with given size', async () => {
    const data = getAllDates(
      new Date('2023-05-01'),
      new Date('2023-06-08'),
    ).map((v) => ({
      date: v,
      text: `Today is ${format(v, 'yyyy-MM-dd')}`,
    }));

    const DIVIDER = 60;
    const ITEM = 120;

    const itemSize: TimelineType.ItemSizeConfig = {
      item: ITEM,
      divider: DIVIDER,
    };

    const renderItem: ListRenderItem<{
      date: Date;
      text: string;
    }> = ({ item, index }) => (
      <View
        style={{
          height: '100%',
          flex: 1,
        }}>
        <Text>{`${item.text}`}</Text>
      </View>
    );

    const { getByTestId } = render(
      <Timeline
        testID="flat-list"
        data={data}
        renderItem={renderItem}
        itemSizeForOptimization={itemSize}
      />,
    );

    /**
     * first item is always Date divider item
     */
    const dividerItemWithGivenHeight = getByTestId('item-0').props.style.find(
      (style: ViewStyle) => 'height' in style && style.height === DIVIDER,
    );

    /**
     * second item is normal T item
     */
    const normalItemWithGivenHeight = getByTestId('item-1').props.style.find(
      (style: ViewStyle) => 'height' in style && style.height === ITEM,
    );

    expect(normalItemWithGivenHeight).toBeTruthy();

    expect(dividerItemWithGivenHeight).toBeTruthy();
  });

  it('should render item with dynamic size', () => {
    const data = getAllDates(
      new Date('2023-05-01'),
      new Date('2023-05-04'),
    ).map((v, index) => ({
      date: v,
      height: index * 50,
    }));

    const renderItem: ListRenderItem<{
      date: Date;
      height: number;
    }> = ({ item, index }) => (
      <View
        testID={`inner-item-${index}`}
        style={{
          height: item.height,
          flex: 1,
        }}>
        <Text>{`${item.height}`}</Text>
      </View>
    );

    const { getByTestId } = render(
      <Timeline
        testID="flat-list"
        data={data}
        renderItem={renderItem}
        injectDividerBy="never"
      />,
    );

    data.forEach((_, index) => {
      expect(getByTestId(`inner-item-${index}`).props.style.height).toEqual(
        data[index].height,
      );
    });
  });
});
