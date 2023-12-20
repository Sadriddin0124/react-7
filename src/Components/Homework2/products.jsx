import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Products extends Component {
  state = {
    books: [
      { id: 1, book: "O'tkan kunlar" },
      { id: 2, book: "Dunyoning Ishlari" },
      { id: 3, book: "Hamlet" },
    ],
  };
  render() {
    const { books } = this.state;
    return (
      <div>
        <div className="row mt-5">
          {books.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <div className="card-header">
                    <Link to={`/product/${item.id - 1}`} className="btn btn-dark">{item.book}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        ;
      </div>
    );
  }
}
