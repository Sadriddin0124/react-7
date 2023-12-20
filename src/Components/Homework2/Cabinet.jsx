import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cabinet extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4 offset-4">
            <Link className="btn btn-info m-5" to="/settings">
              Settings
            </Link>
            <Link className="btn btn-info m-5" to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
