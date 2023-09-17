import styled from 'styled-components';

export const ToolbarWrapper = styled.div`
  padding: 16px 8px;
  display: flex;
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const ViewsWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ViewItem = styled.button`
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
`

export const ControlsWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`

export const Control = styled.button`
  border: none;
  background-color: transparent;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`