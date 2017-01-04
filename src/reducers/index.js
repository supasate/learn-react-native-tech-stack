import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'

const rootReducer = combineReducers({
  libraries: LibraryReducer,
})

export default rootReducer
