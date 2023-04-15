// import { configureStore } from "@reduxjs/toolkit";
import MainAppReducer from "../reducers/reducer";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, MainAppReducer);
// // export default configureStore({
// //   reducer: {
// //     MainApp: MainAppReducer,
// //   },
// // });

// export default () => {
//   let store = configureStore({
//     reducer: {
//       MainApp: persistedReducer,
//     },
//   });
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "carexpertz",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ MainApp: MainAppReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
