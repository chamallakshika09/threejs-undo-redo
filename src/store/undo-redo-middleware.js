import { redo, selectFuture, selectPast, undo } from './history-slice';

const undoRedoMiddleware = (store) => (next) => (action) => {
  if (action.type === undo.type) {
    const state = store.getState();
    const past = selectPast(state);
    const lastAction = past.length ? past[past.length - 1] : null;

    if (lastAction) {
      store.dispatch({ type: lastAction.type, payload: lastAction.payload.oldValue });
    }
  }
  if (action.type === redo.type) {
    const state = store.getState();
    const future = selectFuture(state);
    const nextAction = future.length ? future[future.length - 1] : null;

    if (nextAction) {
      store.dispatch({ type: nextAction.type, payload: nextAction.payload.newValue });
    }
  }

  return next(action);
};

export default undoRedoMiddleware;
