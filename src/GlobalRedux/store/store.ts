import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import countryReducer from './reducers/country';
import statsReducer from './reducers/stats';
import homeReducer from './reducers/home';
import userReducer from './reducers/user';
import earthReducer from './reducers/earth';
import graphReducer from './reducers/graph';

const store = configureStore({
  reducer: {
    earth: earthReducer,
    stats: statsReducer,
    country: countryReducer,
    home: homeReducer,
    user: userReducer,
    graph: graphReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

if (typeof sessionStorage !== 'undefined') {
  const url = window.location.host;
  if (!url.includes('localhost')) {
    sessionStorage.clear();
  }
  const username = sessionStorage.getItem('username');
  const sessionId = sessionStorage.getItem('sessionId');

  if (sessionId && username) {
    store.dispatch({
      type: 'user/login/fulfilled',
      payload: {
        data: {
          session: {
            id: parseInt(sessionId),
            username,
          },
        },
      },
    });
  }
}

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
