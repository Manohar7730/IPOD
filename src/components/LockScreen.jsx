import { Component } from "react";
import { IoIosLock } from "react-icons/io";
import "../styles/LockScreen.css";

export default class LockScreen extends Component {
  render() {
    return (
      <>
        <div>
          <div className="lock-display">
            <IoIosLock />
          </div>
          <div className="bottom-div-lock">
            <h3>Press Center to unlock</h3>
          </div>
        </div>
      </>
    );
  }
}
