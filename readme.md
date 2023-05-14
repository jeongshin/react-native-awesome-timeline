```ts
interface TimelineProps<T> {
  data: T[];

  /**
   * sort data by date
   * @default 'desc'
   */
  sortDateBy?: SortDateBy;

  /**
   * when to inject divider comparing previous item
   * @default 'month'
   */
  injectDividerBy?: InjectDividerBy;

  /**
   * renderDivider function
   */
  renderDivider?: (
    date: Date,
    // prevItem: T | undefined,
    // nextItem: T | undefined,
  ) => ReactElement;

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
   */
  fixedItemHeight?: number;

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
}
```
