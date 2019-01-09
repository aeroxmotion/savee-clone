import React, { Component } from 'react'
import types from 'prop-types'
import './IconButton.css'
import Icon from '../Icon/Icon'

class IconButton extends Component {
  static propTypes = {
    icon: types.string,
    iconSize: types.number,
    iconOverflow: types.bool
  }

  static defaultProps = {
    iconOverflow: false
  }

  render () {
    const { icon, iconSize, iconOverflow, ...props } = this.props

    return (
      <button className={`c-icon-button ${iconOverflow ? 'icon-with-overflow' : ''}`} {...props}>
        <Icon name={icon} size={iconSize} />
      </button>
    )
  }
}

export default IconButton
