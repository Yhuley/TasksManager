import styled from "styled-components";

export const StyledWrapper = styled.div`
  & svg {
    display: none;
    margin-left: auto;
    cursor: pointer;
  }

  &:hover {
    span {
      display: none;
    }

    svg {
      display: block;
    }
  }
`