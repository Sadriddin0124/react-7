import React, { Component } from "react";

export default class Details extends Component {
  state = {
    details: [
      { id: 1, detail_num: "Detail-1", text: "KJhbvawenjmdvsl" },
      {
        id: 2,
        detail_num: "Detail-2",
        text: "KJhbvawenjmdvslsf gsdfrf sdsdfxg esfd ",
      },
      {
        id: 3,
        detail_num: "Detail-3",
        text: "KJhbvawrfvs rfsdgenjmdvsl fgs sdf ",
      },
      { id: 4, detail_num: "Detail-4", text: "KJdgcv hbvawenjmdvsl rtg dfs" },
    ],
  };
  render() {
    const url = window.location.href.split("/");
    console.log(url);
    let index = Number(url[4]);
    console.log(index);
    const { details } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-4 offset-4">
            <div className="card">
              <div className="card-header">
                <h1>{details[index].detail_num}</h1>
                <h1>{details[index].text}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
