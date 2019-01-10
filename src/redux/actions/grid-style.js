import types from '../action-types'

export function changeSize (size) {
  return {
    type: types.CHANGE_GRID_SIZE,
    size
  }
}

export function changePadding (padding) {
  return {
    type: types.CHANGE_GRID_PADDING,
    padding
  }
}
