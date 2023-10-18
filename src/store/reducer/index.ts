import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './module/counter'
const rootReducer = combineReducers({
	counter: counterReducer
})
export default rootReducer
