import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';

const rootReducer = combineReducers({
   counter: counterSlice,
});

export const createReduxStore = initialStore => {
   return configureStore({
      reducer: rootReducer,
      preloadedState: initialStore,
   });
};
