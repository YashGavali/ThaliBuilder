import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export default configureStore({
  reducer, composeWithDevTools
})