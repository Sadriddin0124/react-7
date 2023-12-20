import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default class Homework3 extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header title="<header>" />
        </div>
        <div className="row">
          <div className="col-2 bg-primary">
            <Nav nav="<nav>"/>
          </div>
          <div className="col-10">
            <Main figure='<figure>' fgcaption="<fgcaption>" article="<article>" footer="<footer>" header="<header>"/>
          </div>
        </div>
        <div className="row">
            <Footer footer="<footer>"/>
        </div>
      </div>
    );
  }
}
