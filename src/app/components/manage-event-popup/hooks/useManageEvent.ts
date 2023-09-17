import { AppEvent, useAppDispatch } from "@data";
import { createEvent, deleteEvent, editEvent } from "@data/reducers/events";
import { setHours, setMinutes, setSeconds } from "date-fns";

export const useManageEvent = (closePopup: () => void, isEditForm?: boolean) => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: AppEvent) => {
    const { start, end, allDay } = values;
    if (start) {
      const newValues = {
        ...values,
        start: allDay ? setSeconds(setMinutes(setHours(new Date(start), 0), 0), 0) : start,
        end: allDay ? setSeconds(setMinutes(setHours(new Date(start), 23), 59), 59) : end,  
      };
      isEditForm ? dispatch(editEvent(newValues)) : dispatch(createEvent(newValues));
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
  }
}