import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Homeworks extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-6 offset-3">
                <Link to='/auth' className='btn btn-danger m-5'>Homework 1</Link>
                <Link to="/menu" className='btn btn-danger m-5'>Homework 2</Link>
                <Link to="/homework3" className='btn btn-danger m-5'>Homework 3</Link>
            </div>
        </div>
      </div>
    )
  }
}
