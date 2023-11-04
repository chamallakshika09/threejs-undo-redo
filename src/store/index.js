import { configureStore } from '@reduxjs/toolkit';
import cubeSlice from './cube-slice';
import historySlice from './history-slice';
import undoRedoMiddleware from './undo-redo-middleware';

export const store = configureStore({
  reducer: {
    cube: cubeSlice,
    history: historySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(undoRedoMiddleware),
});
