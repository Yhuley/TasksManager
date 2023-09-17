import { Event } from 'react-big-calendar';

export type AppEvent = {
  id: string;
  title: string;
} & Event;