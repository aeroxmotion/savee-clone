import { createStore, combineReducers } from 'redux'
import * as searchBarReducers from './reducers/search-bar'

export default createStore(
  combineReducers({
    ...searchBarReducers
  })
)
