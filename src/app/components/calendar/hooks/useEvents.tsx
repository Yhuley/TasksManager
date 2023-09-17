import { AppEvent, selectors, useAppSelector } from "@data";
import { useMemo, useState } from "react";

export const useEvents = () => {
  const [searchValue, setSearchValue] = useState('');
  const [eventToEdit, setEventToEdit] = useState<AppEvent | null>(null);
  const events = useAppSelector(selectors.events.getItemsList);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const eventsToShow = useMemo(() => events.filter((e) => 
    e.title.toLocaleLowerCase().includes(searchValue.toLowerCase())
  ), [events, searchValue])

  return {
    eventToEdit,
    setEventToEdit,
    events: eventsToShow,
    searchValue,
    handleSearchChange
  }
}