import React, { Component, Fragment } from 'react'
import Header from './components/Header/Header'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <SearchBar />
      </Fragment>
    )
  }
}

export default App
