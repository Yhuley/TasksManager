import styled from "styled-components";

export const StylesLabelsContent = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
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