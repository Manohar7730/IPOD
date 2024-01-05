import { Component } from "react";
import "../styles/Display.css";
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";

export default class Display extends Component {
  render() {
    return (
      <>
        <div className="display">
          <Navbar />
          <LockScreen />
        </div>
      </>
    );
  }
}
