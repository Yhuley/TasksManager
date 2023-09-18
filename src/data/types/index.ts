export type LabelType = {
  id: string;
  title: string;
  color: string;
}

export enum ReducerStatus {
  idle = 'idle',
  pending = 'pending',
  success = 'success',
  failed = 'failed',
}

export type WorldWideHoliday = {
  id: string;
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean,
  counties: string[] | null;
  launchYear: number | null,
  types: string[];
}
