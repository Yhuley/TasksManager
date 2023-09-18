import { HeaderProps } from 'react-big-calendar';
import { Text } from '@ui';

export const WeekHeader = ({ label }: HeaderProps) =>
  <Text color="grey" size={14}>{label}</Text>;