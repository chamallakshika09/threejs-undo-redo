import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    past: [],
    future: [],
  },
  reducers: {
    addHistory: (state, action) => {
      state.past.push(action.payload);
      state.future = []; // Clear future when new action is performed
    },
    undo: (state) => {
      const previous = state.past.pop();
      if (previous) {
        state.future.push(previous);
      }
    },
    redo: (state) => {
      const next = state.future.pop();
      if (next) {
        state.past.push(next);
      }
    },
  },
});

export const { addHistory, undo, redo } = historySlice.actions;
export default historySlice.reducer;

export const selectPast = (state) => state.history.past;
export const selectFuture = (state) => state.history.future;
