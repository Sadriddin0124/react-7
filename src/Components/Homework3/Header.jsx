import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const {title} = this.props
    return (
      <div className='row bg-warning p-4'>
        <h1 className='text-center'>{title}</h1>
      </div>
    )
  }
}
