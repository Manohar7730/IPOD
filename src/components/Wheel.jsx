import { Component } from "react";
import { BsSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { HiPlayPause } from "react-icons/hi2";
import "../styles/Wheel.css";

export default class Wheel extends Component {
  render() {
    return (
      <>
        <div className="wheelContainer" id="wheelContainer">
          <div className="wheel" id="wheel">
            <div className="control" id="menu">
              menu
            </div>
            <div className="control" id="forward">
              <BsSkipForwardFill />
            </div>
            <div className="control" id="backward">
              <BsSkipBackwardFill />
            </div>
            <div className="control" id="play-pause">
              <HiPlayPause />
            </div>
          </div>
          <div className="blank" id="blank"></div>
        </div>
      </>
    );
  }
}
