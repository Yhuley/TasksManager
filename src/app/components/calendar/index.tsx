import { Calendar as BigCalendar } from 'react-big-calendar';
import { calendarLocalizer } from '../../utils';
import { components } from './components';
import './styles.module.scss';
import { useEventDND } from './hooks';
import ManageEventPopup from '../manageEventPopup';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { AppEvent } from '@data';
import { useState } from 'react';

const DnDCalendar = withDragAndDrop(BigCalendar)

type CalendarProps = {
  events: AppEvent[];
  eventToEdit: AppEvent | null;
  setEventToEdit: React.Dispatch<React.SetStateAction<AppEvent | null>>;
}
const Calendar = ({ events, eventToEdit, setEventToEdit }: CalendarProps) => {
  const { onEventDrop } = useEventDND();
  const [isAddEventPopupShown, setAddEventPopupShown] = useState(false);


  return (
    <>
      <DnDCalendar
        components={components}
        events={events}
        onSelectEvent={(e) => setEventToEdit(e as AppEvent)}
        views={['month', 'week']}
        localizer={calendarLocalizer}
        draggableAccessor={(event) => true}
        resizable={false}
        onEventDrop={onEventDrop}
        onSelectSlot={() => setAddEventPopupShown(true)}
      />
      {eventToEdit ? <ManageEventPopup closePopup={() => setEventToEdit(null)} eventToEdit={eventToEdit} /> : null}
      {isAddEventPopupShown ? <ManageEventPopup closePopup={() => setAddEventPopupShown(false)} /> : null}
    </>
  )
}

export default Calendar