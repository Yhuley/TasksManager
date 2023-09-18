import { ReducerStatus, WorldWideHoliday } from '@data/types';
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from "uuid";

type WorldWideHolidaysState = {
  listLoading: ReducerStatus;
  error: string;
}

const initialState: WorldWideHolidaysState = {
  listLoading: ReducerStatus.idle,
  error: '',
};

export const fetchList = createAsyncThunk(
  'worldWideHolidays/fetchList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://date.nager.at/api/v3/NextPublicHolidaysWorldwide`);
      return res.data.map((h) => ({ ...h, id: uuid() }));
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const entityAdapter = createEntityAdapter<WorldWideHoliday>();

const slice = createSlice({
  name: 'worldWideHolidays',
  initialState: entityAdapter.getInitialState(initialState),
  reducers: {
    clear() {
      return entityAdapter.getInitialState(initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.pending, (state) => {
      state.listLoading = ReducerStatus.pending;
    });

    builder.addCase(fetchList.fulfilled, (state, action) => {
      entityAdapter.setAll(state, action.payload || []);
      state.listLoading = ReducerStatus.success;
    });

    builder.addCase(fetchList.rejected, (state, action) => {
      state.listLoading = ReducerStatus.failed;

      if (action.payload) {
        state.error = action.error.message || 'Something went wrong';
      }
    });
  },
});

const { actions, reducer } = slice;
export const { clear } = actions;
export default reducer;
