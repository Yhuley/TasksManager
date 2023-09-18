import { LabelType, selectors, useAppDispatch, useAppSelector } from "@data";
import { createEvent, deleteEvent, editEvent } from "@data/reducers/events";
import { Event } from "react-big-calendar";
import { setHours, setMinutes, setSeconds } from "date-fns";

export const useManageEvent = (closePopup: () => void, eventToEdit?: Event) => {
  const dispatch = useAppDispatch();
  
  const labels = useAppSelector(selectors.labels.getItemsList);

  const isNewLabel = (id: string, labels: LabelType[]) => !labels.find((l) => l.id === id);

  const onSubmit = (values: Event) => {
    const { start, end, allDay } = values;
    if (start) {
      const newValues = {
        ...values,
        start: allDay ? setSeconds(setMinutes(setHours(new Date(start), 0), 0), 0) : start,
        end: allDay ? setSeconds(setMinutes(setHours(new Date(start), 23), 59), 59) : end,  
      };
      !!eventToEdit ? dispatch(editEvent(newValues)) : dispatch(createEvent(newValues));
      closePopup();
    }
  };

  const onDelete = (eventId: string) => {
    dispatch(deleteEvent(eventId));
    closePopup();
  }

  return { 
    onSubmit,
    onDelete,
    labels,
    isNewLabel,
  }
}