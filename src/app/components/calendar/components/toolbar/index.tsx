import { ToolbarProps } from 'react-big-calendar';
import { Control, ControlsWrapper, ToolbarWrapper, ViewItem, ViewsWrapper } from './styles';
import { Text } from '@ui';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { DownloadCalendar, ExportToImage, UploadCalendar } from './components';

const CalendarToolbar = ({
	onView,
	views,
	label,
	onNavigate,
}: ToolbarProps) => {
	return (
		<ToolbarWrapper>
			<Text weight={500} size={20}>{label}</Text>
			<ViewsWrapper>
				{Array.isArray(views) ? views.map((v) => <ViewItem key={v} onClick={() => onView(v)}>{v}</ViewItem>) : null}
			</ViewsWrapper>
			<ControlsWrapper>
				<Control onClick={() => onNavigate('PREV')}><FaChevronLeft color="grey" /></Control>
				<Control onClick={() => onNavigate("TODAY")}>
					<Text size={14}>Today</Text>
				</Control>
				<Control onClick={() => onNavigate('NEXT')}><FaChevronRight color="grey" /></Control>
			</ControlsWrapper>
			<DownloadCalendar />
			<UploadCalendar />
			<ExportToImage />
		</ToolbarWrapper>
	);
};

export default CalendarToolbar;
