import React, { Component } from 'react'

export default class Header extends Component {
    render() {
      return (
        <header>
          <h1 className='logo'>{this.props.title}</h1>
          <p>Header explanation</p>
        </header>
      )
    }
  }
