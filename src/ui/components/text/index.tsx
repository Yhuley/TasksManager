import { ReactNode } from "react";
import { ReactElement } from "react";
import { Text as StyledText } from "./styles"
 
export type TextProps = {
  children: ReactNode;
  color?: string;
  weight?: 300 | 400 | 500 | 600 | 700 | 800;
  size?: number;
  className?: string;
}

export const Text = ({ children, ...props }: TextProps): ReactElement => {
  return <StyledText {...props}>{children}</StyledText>
}

Text.defaultProps = {
  color: '#000',
  weight: 400,
  size: 16,
}