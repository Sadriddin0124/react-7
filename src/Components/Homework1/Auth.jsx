import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Auth extends Component {
  state={
    username: '',
    password: ''
  }
  handleUsername=(event)=> {
    this.setState({
      username: event.target.value
    })
  }
  handlePassword=(event)=> {
    this.setState({
      password: event.target.value
    })
  }
  login=()=>{
    const {username, password} = this.state
    console.log(username);
    if (username === "admin" && password === '123') {
      alert("Success")
    } else {
      alert("Fail")
    }
  }
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">Login</h1>
                    </div>
                    <div className="card-body">
                      <input type="text"  placeholder='Username'    className='form-control my-3' onChange={this.handleUsername}/>
                      <input type="password" placeholder='Password' className='form-control my-3' onChange={this.handlePassword}/>
                    </div>
                    <div className="card-footer d-flex flex-column ">
                      <button className='btn btn-success my-3' onClick={this.login}>login</button>
                      <Link to='/cars' className='btn btn-primary'>Cars</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
