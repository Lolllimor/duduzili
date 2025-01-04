import { baseApi } from './features/base-api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Combine reducers
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
