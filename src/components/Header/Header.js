import React, { Component } from 'react'
import './Header.css'
import IconButton from '../IconButton/IconButton'

class Header extends Component {
  render () {
    return (
      <header className="c-header">
        <span className="c-header__logo">
          Sa<br />
          Vee
        </span>

        <nav className="c-header__nav">
          <IconButton onClick={this.toggleSearchBar} icon="search" />
          <IconButton icon="cursor" />
          <IconButton icon="slide" iconSize={53} iconOverflow={true} />
          <IconButton icon="add" />
        </nav>
      </header>
    )
  }
}

export default Header
