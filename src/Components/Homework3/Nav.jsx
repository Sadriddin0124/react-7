import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    const {nav} = this.props
    return (
      <div>
        <div className="row bg-primary">
            <h1 className=' text-center'>{nav}</h1>
        </div>
      </div>
    )
  }
}
