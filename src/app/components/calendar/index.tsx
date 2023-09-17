import { Calendar as BigCalendar } from 'react-big-calendar';
import { calendarLocalizer } from '../../utils';
import { components } from './components';
import './styles.module.scss';
import { useEventDND, useEvents } from './hooks';
import ManageEventPopup from '../manage-event-popup';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

const DnDCalendar = withDragAndDrop(BigCalendar)

const Calendar = () => {
  const { eventToEdit, setEventToEdit, events } = useEvents();
  const { onEventDrop } = useEventDND();

  return (
    <>
      <DnDCalendar
        components={components}
        events={events}
        onSelectEvent={(e) => setEventToEdit(e)}
        views={['month', 'week']}
        localizer={calendarLocalizer}
        draggableAccessor={(event) => true}
        resizable={false}
        onEventDrop={onEventDrop}
      />
      {eventToEdit ? <ManageEventPopup closePopup={() => setEventToEdit(null)} eventToEdit={eventToEdit} /> : null}
    </>
  )
}

export default Calendar