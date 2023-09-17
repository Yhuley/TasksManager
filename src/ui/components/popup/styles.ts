import styled from 'styled-components';

export const StyledPopupBackground = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: fit-content;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
`

export const StyledPopup = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  display: flex;
  min-width: 400px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  transform: translate(-50%, -50%);
`

export const StyledPopupHeader = styled.div`
  display: flex;
  padding: 8px;
  background-color: #1c2c41;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px 8px 0 0;
`

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 9px;
  right: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`