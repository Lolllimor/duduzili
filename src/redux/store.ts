import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { createLogger } from "redux-logger";

import storage from "redux-persist/lib/storage";
// import { apiSlice } from "./features/apiSlice";
import authSlice from "./features/auth/authSlice";

const rootReducer = combineReducers({
  // [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice,
});

const persistConfig = {
  key: "app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    // Initialize the middlewares array
    const middlewares = getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed
    }); // Use apiSlice.middleware here
    // .concat(apiSlice.middleware);

    // Add logger middleware in development
    if (process.env.NODE_ENV === "development") {
      const logger = createLogger();
      middlewares.push(logger); // Use `push` to add the logger
    }

    return middlewares; // Return the complete middleware array
  },
  devTools: process.env.NODE_ENV === "development", // Simplify devTools condition
});

// Setup listeners for the API slices
setupListeners(store.dispatch);

// calls to be ran on every page load
const initializeApp = async () => {};
export const persistedStore = persistStore(store);
export type StoreType = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
initializeApp();
