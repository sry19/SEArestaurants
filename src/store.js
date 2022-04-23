import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/counterSlice'

export const store = configureStore({
  reducer: {
    orderCounter: counterReducer,
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())