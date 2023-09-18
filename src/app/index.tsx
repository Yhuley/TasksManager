import { Loader } from '@ui';
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
		onSelectEvent,
		handleSearchChange,
		labelFilters,
		handleLabelSelect,
		isWorldWideHolidaysLoading,
	} = useEvents();
	const { isLabelsPopupShown, closeLabelsPopup, showLabelsPopup, labels } = useLabels();

	if (isWorldWideHolidaysLoading) return <Loader />
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
				onSelectEvent={onSelectEvent}
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
