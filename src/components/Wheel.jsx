import React, { Component } from "react";
import { BsSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { HiPlayPause } from "react-icons/hi2";
import "../styles/Wheel.css";
import ZingTouch from "zingtouch";

class Wheel extends Component {
  state = { angle: 0 };

  componentDidMount() {
    const { changeMenuBackward } = this.props;
    const wheel = document.getElementById("wheel");
    const menu = document.getElementById("menu");

    const region = new ZingTouch.Region(wheel);

    region.bind(wheel, "rotate", this.wheelControl);
    region.bind(menu, "tap", (e) => {
      changeMenuBackward(e);
    });
  }

  wheelControl = (event) => {
    const { updateActiveMenu, currentMenu } = this.props;
    const { distanceFromOrigin, angle, distanceFromLast } = event.detail;

    if (distanceFromOrigin === 0) {
      this.setState({ angle });
    }

    if (Math.abs(this.state.angle - angle) > 300) {
      if (distanceFromLast === 0) {
        return;
      } else {
        updateActiveMenu(distanceFromLast < 0 ? 1 : 0, currentMenu);
      }
    } else if (Math.abs(this.state.angle - angle) > 15) {
      this.setState({ angle });
      updateActiveMenu(distanceFromLast > 0 ? 1 : 0, currentMenu);
    }
  };

  render() {
    const { changeMenuForward, currentMenu, active } = this.props;
    return (
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
        <div
          className="blank"
          id="blank"
          onClick={() => changeMenuForward(active, currentMenu)}
        ></div>
      </div>
    );
  }
}

export default Wheel;
