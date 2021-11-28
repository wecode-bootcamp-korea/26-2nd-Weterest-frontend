import { createStore } from 'redux';
import rootReducer from './redux/index';

const localStorageKey = 'theme';
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
  darkMode: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const preferences = store.getState().darkMode;
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export default store;
