import { InputHTMLAttributes } from "react";
import { v4 as uuid } from "uuid";
import { StyledCheckboxWrapper } from "./styles";
import { Text } from "../text";

type CheckBoxProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;


export const Checkbox = ({ id, label, value, name, error, ...props }: CheckBoxProps) => {
  const defaultId = uuid();

  return (
    <StyledCheckboxWrapper>
      <input type="checkbox" name={name} id={id || defaultId} value={value} {...props} />
      {label ? (
        <label htmlFor={id || defaultId}>
          <Text size={14}>{label}</Text>
        </label>
      ) : null}
      {error ? <Text className="error" color="red" size={12}>{error}</Text> : null}
    </StyledCheckboxWrapper>
  )
}