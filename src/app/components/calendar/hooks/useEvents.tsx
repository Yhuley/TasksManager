import { AppEvent, selectors, useAppSelector } from "@data";
import { useMemo, useState } from "react";

export const useEvents = () => {
  const [searchValue, setSearchValue] = useState('');
  const [labelFilters, setLabelFilters] = useState<string[]>([]);
  const [eventToEdit, setEventToEdit] = useState<AppEvent | null>(null);

  const events = useAppSelector(selectors.events.getItemsList);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleLabelSelect = (id: string) => {
    console.log(id)
    const isNewLabel = !labelFilters.includes(id);
    console.log(isNewLabel)
    setLabelFilters(isNewLabel ? [...labelFilters, id] : [...labelFilters.filter((f) => f !== id)])
  }

  const eventsToShow = useMemo(() => 
    events.filter((event) => 
      event.title.toLocaleLowerCase().includes(searchValue.toLowerCase()) &&
      labelFilters.every((id) => event.labels.map(e => e.id).includes(id))
  ), [events, searchValue, labelFilters]);

  return {
    eventToEdit,
    setEventToEdit,
    events: eventsToShow,
    searchValue,
    handleSearchChange,
    labelFilters,
    handleLabelSelect,
  }
}