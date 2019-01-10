import React, { Component } from 'react'
import * as types from 'prop-types'

import './GridControl.css'

class GridControl extends Component {
  static propTypes = {
    size: types.number.isRequired,
    padding: types.number.isRequired,
    onSizeChange: types.func.isRequired,
    onPaddingChange: types.func.isRequired
  }

  render () {
    const { size, padding, onSizeChange, onPaddingChange } = this.props

    return (
      <div className="c-grid-control">
        <div className="c-grid-control__container">
          <h3>Size</h3>

          <input type="range" step="1" min="0" max="7" value={size} onChange={e => onSizeChange(e.target.valueAsNumber)} />
        </div>

        <div className="c-grid-control__container">
          <h3>Padding</h3>

          <input type="range" step="4" min="0" max="40" value={padding} onChange={e => onPaddingChange(e.target.valueAsNumber)} />
        </div>
      </div>
    )
  }
}

export default GridControl
