import { selectors, useAppSelector } from "@data"

export const useDownloadCalendar = () => {
  const events = useAppSelector(selectors.events.getItemsList);

  const downloadCalendar = () => {
    const jsonEvents = JSON.stringify(events, null, 2);

    const blob = new Blob([jsonEvents], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'events.json';
    a.click();

    URL.revokeObjectURL(url);
  }

  return {
    downloadCalendar
  }
}