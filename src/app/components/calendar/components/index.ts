import { Components } from 'react-big-calendar';
import CalendarToolbar from './toolbar';
import { monthComponents } from './month';
import { weekComponents } from './week';

export const components: Components<Event, object> = {
	toolbar: CalendarToolbar,
	month: monthComponents,
	week: weekComponents,
};
