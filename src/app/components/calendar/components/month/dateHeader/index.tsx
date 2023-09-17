import { Text } from "@ui";
import ManageEventPopup from "@app/components/manageEventPopup";
import { isToday } from "date-fns";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { DateHeaderProps } from "react-big-calendar";
import { StyledWrapper } from "./styles";

export const DateHeader = ({ label, date }: DateHeaderProps) => {
  const [isAddEventPopupShown, setAddEventPopupShown] = useState(false);

  return (
    <>
      <StyledWrapper>
        <Text color={isToday(date) ? '#e77070' : '#000'}>{label}</Text>
        <FaPlus onClick={() => setAddEventPopupShown(true)} />
      </StyledWrapper>
      {isAddEventPopupShown && <ManageEventPopup defaultStartDate={date} closePopup={() => setAddEventPopupShown(false)} />}
    </>
  )
}