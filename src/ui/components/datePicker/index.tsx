import { InputHTMLAttributes } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Text } from "../text";
import { StyledDatePickerWrapper } from './styles';

export type DatePickerProps = {
  date: Date;
  onChange: (date: Date) => unknown;
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const DatePicker = ({ date, onChange, label, error, ...props }: DatePickerProps) => {
  return (
    <StyledDatePickerWrapper>
      {label ? <Text size={16}>{label}</Text> : null}
      <ReactDatePicker
        selected={date}
        onChange={onChange}
        timeInputLabel="Time:"
        dateFormat="dd-MM-yyyy HH:mm"
        showTimeInput
        className="datePicker"
      />
      {error ? <Text className="error" color="red" size={12}>{error}</Text> : null}
    </StyledDatePickerWrapper>
  )
}