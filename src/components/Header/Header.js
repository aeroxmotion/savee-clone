import React, { Component } from 'react'
import './Header.css'
import IconButton from '../IconButton/IconButton'
import * as types from 'prop-types'

class Header extends Component {
  static propTypes = {
    onToggleSearchBar: types.func.isRequired
  }

  render () {
    const { onToggleSearchBar } = this.props

    return (
      <header className="c-header">
        <a href="/" className="c-header__logo">
          Sa<br />
          Vee
        </a>

        <nav className="c-header__nav">
          <IconButton onClick={onToggleSearchBar} icon="search" />
          <IconButton icon="cursor" />
          <IconButton icon="slide" iconSize={53} iconOverflow={true} />
          <IconButton icon="add" />
        </nav>
      </header>
    )
  }
}

export default Header
