import React, { Component } from 'react'
import * as types from 'prop-types'

import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryGrid.css'

class GalleryGrid extends Component {
  static propTypes = {
    columns: types.number,
    gap: types.number,
    images: types.arrayOf(types.object)
  }

  static defaultProps = {
    columns: 10,
    gap: 0
  }

  render () {
    const { columns, gap, images } = this.props

    return (
      <section className="c-gallery-grid" style={{ columnCount: columns, columnGap: `${gap}px` }}>
        {
          images.map(image => (
            <GalleryItem key={image.id} gap={gap} image={image} />
          ))
        }
      </section>
    )
  }
}

export default GalleryGrid
