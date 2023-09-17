import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;

  label {
    cursor: pointer;
  }

  .error {
    position: absolute;
    bottom: -15px;
  }
`