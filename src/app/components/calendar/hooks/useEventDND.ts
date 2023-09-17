import { AppEvent, useAppDispatch } from "@data"
import { editEvent } from "@data/reducers/events";
import { EventInteractionArgs } from "react-big-calendar/lib/addons/dragAndDrop"

export const useEventDND = () => {
  const dispatch = useAppDispatch();

  const onEventDrop = ({ event, start, end }: EventInteractionArgs<AppEvent>) => {
    dispatch(editEvent({ id: event.id, start, end }))
  }

  return {
    onEventDrop
  }
}