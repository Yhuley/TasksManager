import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 6px 18px;
  cursor: pointer;
  background-color: #216ba5;
  color: #fff;
  transition: .5s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #1c2c41;
  }
`

export const StyledButtonIcon = styled.button`
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: .5s;
  gap: 4px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }
`