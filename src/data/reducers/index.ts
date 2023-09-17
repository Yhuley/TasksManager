import { combineReducers } from '@reduxjs/toolkit';
import events from './events';
import labels from './labels';

export const appReducers = combineReducers({ events, labels });
export type RootState = ReturnType<typeof appReducers>;
