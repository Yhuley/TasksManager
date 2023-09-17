import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import {  LabelType } from 'data/types';

interface LabelsState {
  count: number;
}

const initialState: LabelsState = {
  count: 0,
}

const entityAdapter = createEntityAdapter<LabelType>();

export const eventsSlice = createSlice({
  name: 'labels',
  initialState: entityAdapter.getInitialState(initialState),
  reducers: {
    createLabel: (state, action) => {
      entityAdapter.addOne(state, action.payload)
      state.count++;
    },
    editLabel: (state, action) => {
      const { payload } = action;
      entityAdapter.updateOne(state, { id: payload.id, changes: payload })
    },
    deleteLabel: (state, action) => {
      entityAdapter.removeOne(state, action)
      state.count--;
    },
    clear: () => {
      return entityAdapter.getInitialState(initialState);
    },
  },
})

const { actions, reducer } = eventsSlice;
export const { clear, createLabel, editLabel, deleteLabel } = actions;
export default reducer