import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { AppEvent } from 'data/types';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
}

const entityAdapter = createEntityAdapter<AppEvent>();

export const eventsSlice = createSlice({
  name: 'events',
  initialState: entityAdapter.getInitialState(initialState),
  reducers: {
    createEvent: (state, action) => {
      entityAdapter.addOne(state, action.payload)
      state.count++;
    },
    editEvent: (state, action) => {
      const { payload } = action;
      entityAdapter.updateOne(state, { id: payload.id, changes: payload })
    },
    deleteEvent: (state, action) => {
      entityAdapter.removeOne(state, action)
      state.count--;
    },
    clear: () => {
      return entityAdapter.getInitialState(initialState);
    },
  },
})

const { actions, reducer } = eventsSlice;
export const { clear, createEvent, editEvent, deleteEvent } = actions;
export default reducer