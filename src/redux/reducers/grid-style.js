import types from '../action-types'

export function size (state = 0, action) {
  if (action.type === types.CHANGE_GRID_SIZE) {
    return action.size
  }

  return state
}

export function padding (state = 0, action) {
  if (action.type === types.CHANGE_GRID_PADDING) {
    return action.padding
  }

  return state
}
