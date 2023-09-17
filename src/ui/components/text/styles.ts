import styled from 'styled-components';
import { TextProps } from '.';

export const Text = styled.span<TextProps>`
	color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
`;
