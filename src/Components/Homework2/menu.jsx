import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid m-0">
            <div className="row">
               <div className="col-4 offset-4">
               <Link className=' text-decoration-none btn btn-outline-primary m-5' to='/products'>Products</Link>
                <Link className=' text-decoration-none btn btn-outline-primary m-5' to='/cabinet'>Cabinet</Link>
               </div>
            </div>
        </div>
      </div>
    )
  }
}
