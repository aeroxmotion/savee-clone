import React, { Component } from 'react'
import types from 'prop-types'

import iconSet from './icon-set'
import './Icon.css'

class Icon extends Component {
  static propTypes = {
    name: types.string.isRequired,
    size: types.number
  }

  static defaultProps = {
    size: 23
  }

  render () {
    const { name, size } = this.props

    return (
      <img width={size} height={size} src={iconSet[name]} alt={name.replace('-', ' ')} />
    )
  }
}

export default Icon
