import styled from "styled-components";

export const StyledEvent = styled.button<{ continuesPrior: boolean; continuesAfter: boolean }>`
  border-radius: ${(props) => props.continuesPrior ? '0 4px 4px 0' : props.continuesAfter ? '4px 0 0 4px' : '4px' };
  background-color: #0a7ea5;
  border: none;
  padding: 2px;
  cursor: pointer;
  width: 100%;
`