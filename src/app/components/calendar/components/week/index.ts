import { EventProps, HeaderProps } from "react-big-calendar";
import { WeekHeader } from "./header";
import { Event } from "./event";
import { AppEvent } from "@data";

type WeekComponents = {
  header?: React.ComponentType<HeaderProps> | undefined;
  event?: React.ComponentType<EventProps<AppEvent>> | undefined;
} | undefined

export const weekComponents: WeekComponents = {
  header: WeekHeader,
  event: Event,
}