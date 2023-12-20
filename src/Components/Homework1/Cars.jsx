import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Cars extends Component {
  state = {
    cars: [
      { id:1, model: "Gentra", color: "black", price: "$17000", number: '111', position: 1 },
      { id:2, model: "Cobalt", color: "darkblue", price: "$14000", number: '333', position: 3 },
      { id:3, model: "Monza", color: "darkblue", price: "$14000", number: '034' , position: 2 },
    ],
  };
  render() {
    const { cars } = this.state;
    return (
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item, index) => {
              console.log(item.id);
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.model}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>
                   <Link to={`/single_car/${item.id - 1}`} className="btn btn-info">open</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
