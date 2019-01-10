import { createStore, combineReducers } from 'redux'

import * as searchBarReducers from './reducers/search-bar'
import * as gridStyleReducers from './reducers/grid-style'

export default createStore(
  combineReducers({
    ...searchBarReducers,
    gridStyle: combineReducers(gridStyleReducers)
  })
)
