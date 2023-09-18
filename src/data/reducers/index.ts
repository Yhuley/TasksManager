import { combineReducers } from '@reduxjs/toolkit';
import events from './events';
import labels from './labels';
import worldWideHolidays from './worldWideHolidays';

export const appReducers = combineReducers({ events, labels, worldWideHolidays });
export type RootState = ReturnType<typeof appReducers>;
