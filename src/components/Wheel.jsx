import React, { Component } from "react";
import { BsSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { HiPlayPause } from "react-icons/hi2";
import "../styles/Wheel.css";
import ZingTouch from "zingtouch";

class Wheel extends Component {
  state = { angle: 0 };

  componentDidMount() {
    const {
      changeMenuBackward,
      togglePlayPause,
      seekSongForward,
      seekSongReverse,
    } = this.props;
    const wheel = document.getElementById("wheel");
    const menu = document.getElementById("menu");
    const playPause = document.getElementById("play-pause");
    const forward = document.getElementById("forward");
    const backward = document.getElementById("backward");

    const region = new ZingTouch.Region(wheel);

    region.bind(wheel, "rotate", this.wheelControl);
    region.bind(menu, "tap", (e) => {
      changeMenuBackward(e);
    });
    const longTapGesture = new ZingTouch.Tap({
      maxDelay: 10000,
      numInputs: 1,
      tolerance: 1,
    });
    region.bind(playPause, "tap", (e) => {
      togglePlayPause(e);
    });
    region.bind(backward, longTapGesture, (e) => {
      seekSongReverse(e);
    });
    region.bind(forward, longTapGesture, (e) => {
      seekSongForward(e);
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
    const { changeMenuForward, currentMenu, active, wheelColor, color, theme } =
      this.props;
    return (
      <div className="wheelContainer" id="wheelContainer">
        <div
          style={{ backgroundColor: wheelColor, color: color }}
          className="wheel"
          id="wheel"
        >
          <div className="control" id="menu" style={{ color: color }}>
            menu
          </div>
          <div className="control" id="forward" style={{ color: color }}>
            <BsSkipForwardFill />
          </div>
          <div className="control" id="backward" style={{ color: color }}>
            <BsSkipBackwardFill />
          </div>
          <div className="control" id="play-pause" style={{ color: color }}>
            <HiPlayPause />
          </div>
        </div>
        <div
          className="blank"
          style={{ backgroundColor: theme }}
          id="blank"
          onClick={() => changeMenuForward(active, currentMenu)}
        ></div>
      </div>
    );
  }
}

export default Wheel;
