import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {footer} = this.props
    return (
      <div className='bg-danger p-4'>
        <h1 className='text-center'>{footer}</h1>
      </div>
    )
  }
}
