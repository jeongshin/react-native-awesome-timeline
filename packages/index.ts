import type {
  TimelineSortDateBy,
  TimelineItem,
  TimelineProps,
  TimelineInjectDividerBy,
  TimelineItemSizeConfig,
} from './components/Timeline';
import { TimelineAnimationConfig } from './components/Timeline/AnimateWrapper';

export declare namespace TimelineType {
  export type InjectDivider = TimelineInjectDividerBy;
  export type ItemSizeConfig = TimelineItemSizeConfig;
  export type SortDateBy = TimelineSortDateBy;
  export type AnimationConfig = TimelineAnimationConfig;
}

export type { TimelineProps, TimelineItem };

export { MemoizedTimeline } from './components/Timeline';

export { default as Timeline } from './components/Timeline';
