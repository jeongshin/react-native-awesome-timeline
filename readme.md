```ts
interface TimelineProps<T>
  extends Omit<
      FlatListProps<T>,
      | 'renderItem'
      | 'data'
      | 'horizontal'
      | 'viewabilityConfig'
      | 'keyExtractor'
      | 'getItemLayout'
    >,
    ViewabilityConfig {
  data: T[];

  /**
   * sort data by date
   * @default 'desc'
   */
  sortDateBy?: TimelineSortDateBy;

  /**
   * when to inject divider comparing previous item
   * @default 'month'
   */
  injectDividerBy?: TimelineInjectDividerBy;

  /**
   * ref callback
   */
  refCallback?: (ref: FlatList<any>) => void;

  /**
   * renderDivider function
   */
  renderDivider?: (date: Date) => ReactElement;

  /**
   * renderLabel function
   */
  renderLabel?: (data: T) => ReactElement;

  /**
   * renderItem function
   */
  renderItem: ListRenderItem<T>;

  /**
   * style for each item
   */
  itemContainerStyle?: StyleProp<ViewStyle>;

  /**
   * for rendering optimization
   * exact size of item & divider
   */
  itemSizeForOptimization?: TimelineItemSizeConfig;

  /**
   * line color in hex
   * @default '#d8dee4'
   */
  lineColor?: string;

  /**
   * line thickness in px
   * @default 2px
   */
  lineThickness?: number;

  /**
   * label area contents width
   * @default '20%''
   */
  labelContentsWidth?: string | number;

  /**
   * label size
   *
   * @default '10%'
   */
  labelSize?: string | number;

  /**
   * label top offset in px
   */
  labelTopOffset?: number;

  /**
   * gap between label and item
   * @default 4px
   */
  labelPadding?: number;

  /**
   * label padding color
   * @default #ffffff
   */
  labelPaddingColor?: string;

  /**
   * animation configuration
   */
  animationConfig?: TimelineAnimationConfig;
}
```
