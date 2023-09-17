import styled from "styled-components";
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  .colorWrapper {
    display: flex;
    align-items: center;
    gap: 8px;

    .color {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      border: 0.2px solid grey;
    }
  }
`
