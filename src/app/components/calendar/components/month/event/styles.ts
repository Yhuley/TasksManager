import styled from "styled-components";

export const StyledEvent = styled.button<{ continuesPrior: boolean; continuesAfter: boolean }>`
  border-radius: ${(props) => props.continuesPrior ? '0 4px 4px 0' : props.continuesAfter ? '4px 0 0 4px' : '4px' };
  background-color: #1c2c41;
  padding: 4px;
  border: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-break: break-word;
  text-align: left;

  .title {
    display: -webkit-box;
    overflow: hidden;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;

    .label {
      border-radius: 2px;
      height: 5px;
      width: 20px;
    }
  }
`