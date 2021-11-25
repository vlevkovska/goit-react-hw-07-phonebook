import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducer';
import { contactsApi } from './contactSlice';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import phonebookReducer from './reducer';

// const myMiddleware = store => next => action => {
//   console.log('Моя прослойка!', action);

//   next(action);
// };

// function myMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       //body
//     };
//   };
// }

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   // myMiddleware,
//   // logger,
// ];

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
