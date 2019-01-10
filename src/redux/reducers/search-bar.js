import types from '../action-types'

export function showSearchBar (state = false, { type }) {
  if (type === types.TOGGLE_SEARCH_BAR) {
    return !state
  }

  return state
}
