import { HeaderProps } from 'react-big-calendar';
import { Text } from '@ui';

export const MonthHeader = ({ label }: HeaderProps) =>
  <Text color="grey" size={14}>{label.slice(0, 3)}</Text>;