import React, { Component } from 'react'
import cobalt from '../../Assets/cobalt.jpg'
import gentra from '../../Assets/gentra.jpg'
import monza from '../../Assets/monza.png'
export default class SingleCar extends Component {
  state = {
    cars: [
      { id:1, model: "Gentra", color: "black", price: "$17000", number: '111', position: 1 },
      { id:2, model: "Cobalt", color: "darkblue", price: "$14000", number: '333', position: 3 },
      { id:3, model: "Monza", color: "darkblue", price: "$19000", number: '034' , position: 2 },
    ],
  };
  render() {
    const url = window.location.href.split("/")
    let index = Number(url[4])
    const {cars} = this.state
    return (
     <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
        <div>
        <div className="card">
          <div className="card-header">
          {
            index == 0 
            ?
            (<img className='w-100' src={gentra} alt="" />): ('')
          }
          {
           index == 1 ? 
           (<img className='w-100' src={cobalt} alt="" />): ('')
          }
          {
           index == 2 ? 
            (<img className='w-100' src={monza} alt="" />) :("" )
            
          }
          
        
          </div>
        <div className="card-body">
        <h1>{cars[index].model}</h1>
        </div>
        <div className="card-footer">
        <p>Color: {cars[index].color}</p>
        <p>Price: {cars[index].price}</p>
        <p>Number: {cars[index].number}</p>
        <p>Position: {cars[index].position}</p>
        </div>
        </div>
      </div>
        </div>
      </div>
     </div>
    )
  }
}
