import { StyledInput, StyledInputWrapper } from "./styles"
import { Text } from "../text";
import { InputHTMLAttributes } from "react";

type TextInputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, error, ...props }: TextInputProps ) => {
  return (
    <StyledInputWrapper>
      {label ? <Text size={16}>{label}</Text> : null}
      <StyledInput {...props} />
      {error ? <Text className="error" color="red" size={12}>{error}</Text> : null}
    </StyledInputWrapper>
  )
}