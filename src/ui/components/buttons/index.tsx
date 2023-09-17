import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButtonIcon, StyledPrimaryButton } from "./styles";

export type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonIconProps = ButtonProps & { icon: ReactNode };

export const PrimaryButton = ({ children, ...rest }: ButtonProps) => (
  <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>
);

export const ButtonIcon = ({ children, icon, ...rest }: ButtonIconProps) => (
  <StyledButtonIcon {...rest}>
    {icon}
    {children}
  </StyledButtonIcon>
);
