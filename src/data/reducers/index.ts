import { combineReducers } from '@reduxjs/toolkit';
import events from './events';

export const appReducers = combineReducers({ events });
export type RootState = ReturnType<typeof appReducers>;
