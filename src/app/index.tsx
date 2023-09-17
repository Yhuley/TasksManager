import Calendar from './components/calendar';
import { useEvents } from './components/calendar/hooks';
import Header from './components/header';
import Labels from './components/labels';
import { useLabels } from './components/labels/components/labelsPopup/hooks';

const App = () => {
	const { events, eventToEdit, setEventToEdit, searchValue, handleSearchChange } = useEvents();
	const { isLabelsPopupShown, closeLabelsPopup, showLabelsPopup, labels } = useLabels();
	return (
		<>
			<Header
				searchValue={searchValue}
				handleSearchChange={handleSearchChange}
			/>
			<Calendar
				events={events}
				eventToEdit={eventToEdit}
				setEventToEdit={setEventToEdit}
			/>
			<Labels
				labels={labels}
				isLabelsPopupShown={isLabelsPopupShown}
				showLabelsPopup={showLabelsPopup}
				closeLabelsPopup={closeLabelsPopup}
			/>
		</>
	);
};

export default App;
