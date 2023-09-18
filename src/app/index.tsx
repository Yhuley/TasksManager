import Calendar from './components/calendar';
import { useEvents } from './components/calendar/hooks';
import Header from './components/header';
import Labels from './components/labels';
import { useLabels } from './components/labels/components/labelsPopup/hooks';

const App = () => {
	const {
		events,
		eventToEdit,
		setEventToEdit,
		searchValue,
		handleSearchChange,
		labelFilters,
		handleLabelSelect,
	} = useEvents();
	const { isLabelsPopupShown, closeLabelsPopup, showLabelsPopup, labels } = useLabels();
	return (
		<>
			<Header
				labels={labels}
				searchValue={searchValue}
				labelFilters={labelFilters}
				handleSearchChange={handleSearchChange}
				handleLabelSelect={handleLabelSelect}
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
