import React, { Component } from 'react'
import dunyo from "../../Assets/Dunyo.jpg";
import otgan from "../../Assets/otgan.png";
import hamlet from "../../Assets/hamlet.jpg";
import { Link } from 'react-router-dom';

export default class Productid extends Component {
  state = {
    books: [
      { id: 1, author: "Abdulla Qodiriy", book: "O'tkan kunlar" },
      { id: 2, author: "O'tkir Hoshimov", book: "Dunyoning Ishlari" },
      { id: 3, author: "William Shakespeare", book: "Hamlet" },
    ],
  };
  render() {
    const url = window.location.href.split("/")
    let index = Number(url[4])
    const {books} = this.state
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-header">
              {
            index == 0 
            ?
            (<img className='w-100' src={otgan} alt="" />): ('')
          }
          {
           index == 1 ? 
           (<img className='w-100' src={dunyo} alt="" />): ('')
          }
          {
           index == 2 ? 
            (<img className='w-100' src={hamlet} alt="" />) :("" )
            
          }
              </div>
              <div className="card-body">
                <h1>Author: <span className='text-success'>{books[index].author}</span></h1>
              </div>
              <div className="card-footer">
                <h1>Name: <span className='text-success'>{books[index].book}</span></h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 offset-4">
            <Link to='/settings' className='btn btn-outline-info'>Settings</Link>
          </div>
        </div>
      </div>
    )
  }
}
