import styled from "styled-components";

export const StyledLabelFilterWrapper = styled.div`
  max-width: 200px;
  overflow-x: auto;
  gap: 8px;

  .list {
    display: flex;
    gap: 8px;
    align-items: center;

    button {
      border: none;
      height: 16px;
      width: 16px;
      min-width: 16px;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.7;
    }

    .active {
      opacity: 1;
    }
  }
`