import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import GalleryGrid from '../components/GalleryGrid/GalleryGrid'
import HeaderContainer from './HeaderContainer'

class AppContainer extends Component {
  componentWillMount () {
    this.images = []
    const heights = [500, 600, 800]
    const maxImage = 100
    const numImages = 30

    ;[...Array(numImages)].forEach(() => {
      this.images.push({
        id: Math.random().toString(16).slice(2),
        url: `/i/${Math.random().toString(16).slice(2)}`,
        thumb: `https://picsum.photos/800/${heights[Math.floor(Math.random() * heights.length)]}?image=${Math.floor(Math.random() * maxImage)}`
      })
    })
  }

  render () {
    const { gridStyle } = this.props

    return (
      <Fragment>
        <HeaderContainer />
        <GalleryGrid columns={10 - gridStyle.size} gap={gridStyle.padding} images={this.images} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    gridStyle: state.gridStyle
  }
}

export default connect(mapStateToProps)(AppContainer)
