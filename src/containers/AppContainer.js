import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import * as searchBarActions from '../redux/actions/search-bar'

class AppContainer extends Component {
  render () {
    const { showSearchBar, toggleSearchBar } = this.props

    return (
      <Fragment>
        <Header onToggleSearchBar={toggleSearchBar} />
        <SearchBar show={showSearchBar} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    showSearchBar: state.showSearchBar
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleSearchBar: searchBarActions.toggle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
