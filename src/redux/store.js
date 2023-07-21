import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { setupListeners } from '@reduxjs/toolkit/query'

import storage from 'redux-persist/lib/storage'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
}, composeWithDevTools());

setupListeners(store.dispatch)

export default store