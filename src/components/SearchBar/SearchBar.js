import React, { Component } from 'react'
import types from 'prop-types'
import './SearchBar.css'

class SearchBar extends Component {
  static propTypes = {
    show: types.bool
  }

  static defaultProps = {
    show: false
  }

  render () {
    const { show } = this.props

    return (
      <div className={`c-search-bar ${show ? '' : 'c-search-bar--hidden'}`}>
        <input className="c-search-bar__input" placeholder="Search new inspiration" />
      </div>
    )
  }
}

export default SearchBar
