import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    const {figure, fgcaption, article, header, footer} = this.props
    return (
      <div>
        <div className="row">
            <div className="col-2 bg-success">
                <h2 className='text-center'>{figure}</h2>
                <h2 className='text-center'>{fgcaption}</h2>
            </div>
            <div className="col-10">
                <h2 className='text-center bg-warning'>{header}</h2>
                <h1 className='text-center bg-info'>{article}</h1>
                <h2 className='text-center bg-danger'>{footer}</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-2 bg-success">
                <h2>{figure}</h2>
                <h2>{fgcaption}</h2>
            </div>
            <div className="col-10">
                <h2 className='text-center bg-warning'>{header}</h2>
                <h1 className='text-center bg-info'>{article}</h1>
                <h2 className='text-center bg-danger'>{footer}</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-2 bg-success">
                <h2>{figure}</h2>
                <h2>{fgcaption}</h2>
            </div>
            <div className="col-10">
                <h2 className='text-center bg-warning'>{header}</h2>
                <h1 className='text-center bg-info'>{article}</h1>
                <h2 className='text-center bg-danger'>{footer}</h2>
            </div>
        </div>
      </div>
    )
  }
}
