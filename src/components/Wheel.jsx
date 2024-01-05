import { Component } from "react";
import { BsSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { HiPlayPause } from "react-icons/hi2";
import "../styles/Wheel.css";
import ZingTouch from "zingtouch";

export default class Wheel extends Component {
  state = { angle: 0 };
  componentDidMount() {
    const wheel = document.getElementById("wheel");

    const region = new ZingTouch.Region(wheel);

    region.bind(wheel, "rotate", (event) => {
      console.log(event.detail.angle);
    });
  }
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
