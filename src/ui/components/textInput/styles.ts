import styled  from "styled-components";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  position: relative;

  .error {
    position: absolute;
    bottom: -15px;
  }
`

export const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid grey;
  height: 35px;
  padding: 4px;
  width: 100%;
`