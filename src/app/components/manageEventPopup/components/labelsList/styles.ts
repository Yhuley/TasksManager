import styled from "styled-components";

export const StyledLabelsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  .list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;

    .item {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 8px;
      
      .color {
        height: 16px;
        width: 16px;
        border-radius: 50%;
      }

      button {
        margin-left: auto;
      }
    }
  }
`