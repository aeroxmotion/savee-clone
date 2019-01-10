import React, { Component } from 'react'
import * as types from 'prop-types'

import './GalleryItem.css'

class GalleryItem extends Component {
  static propTypes = {
    gap: types.number.isRequired,
    image: types.shape({
      id: types.string.isRequired,
      url: types.string.isRequired,
      thumb: types.string.isRequired
    })
  }

  render () {
    const { gap, image } = this.props

    return (
      <article className="c-gallery-item" style={{ marginBottom: `${gap}px` }}>
        <a className="c-gallery-item__link" href={image.url}>
          <img className="c-gallery-item__image" src={image.thumb} alt="Hello World" />
        </a>
      </article>
    )
  }
}

export default GalleryItem
