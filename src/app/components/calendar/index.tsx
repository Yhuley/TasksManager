import { Calendar as BigCalendar, Event } from 'react-big-calendar';
import { calendarLocalizer } from '../../utils';
import { components } from './components';
import './styles.module.scss';
import { useEventDND } from './hooks';
import ManageEventPopup from '../manageEventPopup';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { useState } from 'react';

const DnDCalendar = withDragAndDrop(BigCalendar)

type CalendarProps = {
  events: Event[];
  eventToEdit: Event | null;
  onSelectEvent: (event: Event) => void;
  setEventToEdit: React.Dispatch<React.SetStateAction<Event | null>>;
}
const Calendar = ({ events, eventToEdit, onSelectEvent, setEventToEdit }: CalendarProps) => {
  const { onEventDrop } = useEventDND();
  const [isAddEventPopupShown, setAddEventPopupShown] = useState(false);

  return (
    <>
      <DnDCalendar
        components={components}
        events={events}
        onSelectEvent={onSelectEvent}
        views={['month', 'week']}
        localizer={calendarLocalizer}
        draggableAccessor={(event: Event) => !event.isExternal}
        resizable={false}
        drilldownView="week"
        onEventDrop={onEventDrop}
      />
      {eventToEdit ? <ManageEventPopup closePopup={() => setEventToEdit(null)} eventToEdit={eventToEdit} /> : null}
      {isAddEventPopupShown ? <ManageEventPopup closePopup={() => setAddEventPopupShown(false)} /> : null}
    </>
  )
}

export default Calendar