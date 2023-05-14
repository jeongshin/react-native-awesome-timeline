import { format } from 'date-fns';
import React, { useCallback, useMemo, useState } from 'react';
import { Text, SafeAreaView, View, ListRenderItem } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MemoizedTimeline, TimelineType } from './packages';
import { getAllDates } from './packages/utils';

export default function App() {
  const [data] = useState(() =>
    getAllDates(new Date('2023-05-01'), new Date('2024-06-08')).map((v) => ({
      date: v,
      text: `Today is ${format(v, 'yyyy-MM-dd')}`,
    })),
  );

  const itemSize: TimelineType.ItemSizeConfig = useMemo(
    () => ({ item: 120, divider: 50 }),
    [],
  );

  const renderItem: ListRenderItem<{
    date: Date;
    text: string;
  }> = useCallback(
    ({ item }) => (
      <View
        style={{
          height: itemSize.item,
          paddingTop: 20,
          flex: 1,
        }}>
        <Text>{`${item.text}`}</Text>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <MemoizedTimeline
          data={data}
          itemSizeForOptimization={itemSize}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
