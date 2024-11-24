import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice.js';
import { loadStorage, updateStorage } from './localStorage.js';

const preloadedState = {
  todos: loadStorage(),
};

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const todos = store.getState().todos;
  updateStorage(todos);
});

export default store;
