import { Component } from "react";
import "../styles/Case.css";
import Display from "./Display";
import Wheel from "./Wheel";

export default class Case extends Component {
  render() {
    return (
      <>
        <div className="case">
          <Display />
          <Wheel />
        </div>
      </>
    );
  }
}
