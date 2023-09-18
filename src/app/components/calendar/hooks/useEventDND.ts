import { useAppDispatch } from "@data";
import { Event } from 'react-big-calendar';
import { editEvent } from "@data/reducers/events";
import { EventInteractionArgs } from "react-big-calendar/lib/addons/dragAndDrop"

export const useEventDND = () => {
  const dispatch = useAppDispatch();

  const onEventDrop = ({ event, start, end }: EventInteractionArgs<Event>) => {
    dispatch(editEvent({ id: event.id, start, end }))
  }

  return {
    onEventDrop
  }
}