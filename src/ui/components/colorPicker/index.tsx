import { SliderPicker, SliderPickerProps } from 'react-color';

export const  ColorPicker = ({ color, onChangeComplete }: SliderPickerProps) => (
  <SliderPicker
    color={color}
    onChangeComplete={onChangeComplete}
  />
);
