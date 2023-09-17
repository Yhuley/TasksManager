import { ToolbarProps } from 'react-big-calendar';
import { Control, ControlsWrapper, ToolbarWrapper, ViewItem, ViewsWrapper } from './styles';
import { Text } from '@ui';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const CalendarToolbar = ({
	onView,
	views,
	view,
	label,
	onNavigate,
}: ToolbarProps<Event, object>) => {
	return (
		<ToolbarWrapper>
			<Text weight={500} size={20}>{label}</Text>
			<ViewsWrapper>
				{views.map((v) => <ViewItem key={v} onClick={() => onView(v)}>{v}</ViewItem>)}
			</ViewsWrapper>
			<ControlsWrapper>
				<Control onClick={() => onNavigate('PREV')}><FaChevronLeft color="grey" /></Control>
				<Control onClick={() => onNavigate("TODAY")}>
					<Text size={14}>Today</Text>
				</Control>
				<Control onClick={() => onNavigate('NEXT')}><FaChevronRight color="grey" /></Control>
			</ControlsWrapper>
		</ToolbarWrapper>
	);
};

export default CalendarToolbar;
