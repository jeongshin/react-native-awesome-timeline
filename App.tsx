import { faker } from '@faker-js/faker';
import { addDays, format } from 'date-fns';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ListRenderItem,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MemoizedTimeline, TimelineType } from './packages';
import { getAllDates } from './packages/utils';

function createRandomData() {
  return {
    username: faker.internet.userName(),
    description: faker.lorem.paragraphs(1),
    avatar: faker.image.avatar(),
  };
}

type Item = {
  date: Date;
  username: string;
  description: string;
  avatar: string;
};

export default function App() {
  const cursor = useRef(new Date('2023-05-30'));

  const [data, setDates] = useState<Item[]>(() =>
    getAllDates(new Date('2023-05-01'), new Date('2023-05-30')).map((v) => ({
      date: v,
      ...createRandomData(),
    })),
  );

  const itemSize: TimelineType.ItemSizeConfig = useMemo(
    () => ({ item: 200, divider: 50 }),
    [],
  );

  const renderItem: ListRenderItem<Item> = useCallback(
    ({ item }) => (
      <View
        style={{
          height: itemSize.item,
          paddingTop: 20,
          flex: 1,
        }}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 60, height: 60, padding: 12, borderRadius: 12 }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            padding: 4,
          }}>{`${item.username}`}</Text>

        <Text>{`${item.description}`}</Text>
      </View>
    ),
    [],
  );

  const handleReachEnd = useCallback(() => {
    const nextCursor = addDays(cursor.current, 10);

    setDates((prev) => [
      ...prev,
      ...getAllDates(cursor.current, nextCursor).map((date) => ({
        date,
        ...createRandomData(),
      })),
    ]);

    cursor.current = nextCursor;
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <MemoizedTimeline
          data={data}
          contentContainerStyle={{ paddingTop: 58 }}
          itemSizeForOptimization={itemSize}
          renderItem={renderItem}
          removeClippedSubviews
          labelPaddingColor="#B799FF"
          labelColor="white"
          labelTopOffset={20}
          injectDividerBy="day"
          windowSize={8}
          initialNumToRender={8}
          animationConfig={{ translateYFrom: -80 }}
          maxToRenderPerBatch={8}
          onEndReached={handleReachEnd}
          ListFooterComponent={<ActivityIndicator size="large" />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
