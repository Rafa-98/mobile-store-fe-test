import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({
  reducer: rootReducers
}, composeWithDevTools());

export default store