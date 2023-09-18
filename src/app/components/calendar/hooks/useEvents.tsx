import { AppEvent, WorldWideHoliday, selectors, useAppDispatch, useAppSelector } from "@data";
import { fetchList } from "@data/reducers/worldWideHolidays";
import { setHours, setMinutes, setSeconds } from "date-fns";
import { useEffect, useMemo, useState } from "react";

export const useEvents = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [labelFilters, setLabelFilters] = useState<string[]>([]);
  const [eventToEdit, setEventToEdit] = useState<AppEvent | null>(null);

  const events = useAppSelector(selectors.events.getItemsList);
  const worldWideHolidays = useAppSelector(selectors.worldWideHolidays.getItemsList);

  const isWorldWideHolidaysLoading = useAppSelector(selectors.worldWideHolidays.getListLoading);

  const convertWorldWideHolidaysToEventType = (holidays: WorldWideHoliday[]): AppEvent[] => {
    return holidays.map((h) => ({
      allDay: true,
      start: setSeconds(setMinutes(setHours(new Date(h.date), 0), 0), 0),
      end: setSeconds(setMinutes(setHours(new Date(h.date), 23), 59), 59),
      title: h.name,
      id: h.id,
      labels: [],
      isExternal: true
    }))
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleLabelSelect = (id: string) => {
    const isNewLabel = !labelFilters.includes(id);
    setLabelFilters(isNewLabel ? [...labelFilters, id] : [...labelFilters.filter((f) => f !== id)])
  }

  const onSelectEvent = (event: AppEvent) => {
    if (!event.isExternal) setEventToEdit(event);
  }

  const eventsToShow = useMemo(() => {
    let convertedHolidays = [];
    if (!isWorldWideHolidaysLoading) {
      convertedHolidays = convertWorldWideHolidaysToEventType(worldWideHolidays);
    }

    return events.filter((event) => 
      event.title.toLocaleLowerCase().includes(searchValue.toLowerCase()) &&
      labelFilters.every((id) => event.labels.map(e => e.id).includes(id))
    ).concat(convertedHolidays);
  }, [events, searchValue, labelFilters, isWorldWideHolidaysLoading, worldWideHolidays]);

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return {
    eventToEdit,
    searchValue,
    labelFilters,
    setEventToEdit,
    onSelectEvent,
    handleSearchChange,
    handleLabelSelect,
    events: eventsToShow,
    isWorldWideHolidaysLoading,
  }
}