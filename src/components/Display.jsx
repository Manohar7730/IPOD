import { Component } from "react";
import "../styles/Display.css";
import Navbar from "./Navbar";

export default class Display extends Component {
  render() {
    return (
      <>
        <div className="display">
          <Navbar />
        </div>
      </>
    );
  }
}
