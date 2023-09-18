import {
  BigCalendarProps,
  EventProps,
  DayLayoutRendererProps,
  WeekNumberProps,
  ToolbarProps,
} from 'react-big-calendar';

declare module 'react-big-calendar' {

  export interface Event {
    allDay?: boolean | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    resource?: any;
    id: string;
    title: string;
    labels: LabelType[];
    isExternal?: boolean;
  }
}