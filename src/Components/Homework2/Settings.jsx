import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Settings extends Component {
  state={
    details: [
      {id: 1, detail_num: 'Detail-1', text: 'KJhbvawenjmdvsl'},
      {id: 2, detail_num: 'Detail-2', text: 'KJhbvawenjmdvslsf gsdfrf sdsdfxg esfd '} ,
      {id: 3, detail_num: 'Detail-3', text: 'KJhbvawrfvs rfsdgenjmdvsl fgs sdf '},
      {id: 4, detail_num: 'Detail-4', text: 'KJdgcv hbvawenjmdvsl rtg dfs'},
    ]
  }
  render() {
    const {details} = this.state
    return (
      <div>
        <div className="row">
          <div className="col-4 offset-4">
            {
              details.map((item, index)=> {
                return (
                  <div key={index}>
                    <Link to={`/details/${item.id - 1}`} className='btn btn-outline-danger'>{item.detail_num}</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
