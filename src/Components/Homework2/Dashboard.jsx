import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
         <div className="row">
          <div className="col-4 offset-4">
            
            <Link className="btn btn-info m-5" to="/balance">
              Balance
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
