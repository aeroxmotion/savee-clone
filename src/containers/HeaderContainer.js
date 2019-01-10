import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import GridControl from '../components/GridControl/GridControl'
import * as searchBarActions from '../redux/actions/search-bar'
import * as gridStyleActions from '../redux/actions/grid-style'

class HeaderContainer extends Component {
  state = {
    showGridControl: false
  }

  render () {
    const { showSearchBar, toggleSearchBar, gridStyle, changeGridPadding, changeGridSize } = this.props

    return (
      <div style={{ position: 'relative' }}>
        <Header
          onOpenGridControl={() => this.setState({ showGridControl: true })}
          onToggleSearchBar={toggleSearchBar} />

        <SearchBar show={showSearchBar} />
        {
          this.state.showGridControl &&
          <GridControl
            size={gridStyle.size}
            padding={gridStyle.padding}
            onPaddingChange={changeGridPadding}
            onSizeChange={changeGridSize} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showSearchBar: state.showSearchBar,
    gridStyle: state.gridStyle
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleSearchBar: searchBarActions.toggle,
    changeGridPadding: gridStyleActions.changePadding,
    changeGridSize: gridStyleActions.changeSize
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
