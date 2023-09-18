import { DateHeaderProps, EventProps, HeaderProps, Event } from "react-big-calendar";
import { MonthHeader } from "./header";
import { DateHeader } from "./dateHeader";
import { Event as MonthEvent } from "./event";

type MonthComponents = {
  header?: React.ComponentType<HeaderProps> | undefined;
  dateHeader?: React.ComponentType<DateHeaderProps> | undefined;
  event?: React.ComponentType<EventProps<Event>>| undefined;
} | undefined;

export const monthComponents: MonthComponents = {
  header: MonthHeader,
  dateHeader: DateHeader,
  event: MonthEvent,
}