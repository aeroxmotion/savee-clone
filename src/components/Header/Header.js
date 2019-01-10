import React, { Component } from 'react'
import * as types from 'prop-types'

import IconButton from '../IconButton/IconButton'
import './Header.css'

class Header extends Component {
  static propTypes = {
    onToggleSearchBar: types.func.isRequired,
    onOpenGridControl: types.func.isRequired
  }

  render () {
    const { onToggleSearchBar, onOpenGridControl } = this.props

    return (
      <header className="c-header">
        <a href="/" className="c-header__logo">
          Sa<br />
          Vee
        </a>

        <nav className="c-header__nav">
          <IconButton onClick={onToggleSearchBar} icon="search" />
          <IconButton icon="cursor" />
          <IconButton onClick={onOpenGridControl} icon="slide" iconSize={53} iconOverflow={true} />
          <IconButton icon="add" />
        </nav>
      </header>
    )
  }
}

export default Header
