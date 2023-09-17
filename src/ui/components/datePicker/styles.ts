import styled from "styled-components";

export const StyledDatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .datePicker {
    width: 100%;
    height: 35px;
    border-radius: 4px;
    border: 1px solid grey;
    padding: 4px;
  }

  .error {
    position: absolute;
    bottom: -15px;
  }
`
