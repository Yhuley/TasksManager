import { AppEvent, selectors, useAppSelector } from "@data";
import { useState } from "react";

export const useEvents = () => {
  const [eventToEdit, setEventToEdit] = useState<AppEvent | null>(null);
  const events = useAppSelector(selectors.getItemsList);

  return {
    eventToEdit,
    setEventToEdit,
    events,
  }
}