import { Event } from 'react-big-calendar';

export type LabelType = {
  id: string;
  title: string;
  color: string;
}

export type AppEvent = {
  id: string;
  title: string;
  labels: LabelType[];
} & Event;
