import React, { Component } from "react";
import { BsSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs";
import { HiPlayPause } from "react-icons/hi2";
import "../styles/Wheel.css";
import ZingTouch from "zingtouch";

class Wheel extends Component {
  state = { angle: 0 };

  componentDidMount() {
    // Destructuring props for easier access
    const {
      changeMenuBackward,
      togglePlayPause,
      seekSongForward,
      seekSongReverse,
    } = this.props;

    // Getting references to wheel elements
    const wheel = document.getElementById("wheel");
    const menu = document.getElementById("menu");
    const playPause = document.getElementById("play-pause");
    const forward = document.getElementById("forward");
    const backward = document.getElementById("backward");

    // Setting up ZingTouch region and binding different gestures to wheel elements
    const region = new ZingTouch.Region(wheel);

    // Rotating the wheel triggers wheelControl method
    region.bind(wheel, "rotate", this.wheelControl);

    // Tapping the menu area triggers changeMenuBackward method
    region.bind(menu, "tap", (e) => {
      changeMenuBackward(e);
    });

    // Setting up long tap gesture for play/pause, forward, and backward controls
    const longTapGesture = new ZingTouch.Tap({
      maxDelay: 10000,
      numInputs: 1,
      tolerance: 1,
    });

    // Tapping play/pause triggers togglePlayPause method
    region.bind(playPause, "tap", (e) => {
      togglePlayPause(e);
    });

    // Long tapping backward triggers seekSongReverse method
    region.bind(backward, longTapGesture, (e) => {
      seekSongReverse(e);
    });

    // Long tapping forward triggers seekSongForward method
    region.bind(forward, longTapGesture, (e) => {
      seekSongForward(e);
    });
  }

  // Method to control the wheel rotation and trigger menu navigation
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
    // Destructuring props for easier access
    const { changeMenuForward, currentMenu, active, wheelColor, color, theme } =
      this.props;
    return (
      <div className="wheelContainer" id="wheelContainer">
        <div
          style={{ backgroundColor: wheelColor, color: color }}
          className="wheel"
          id="wheel"
        >
          {/* Menu control */}
          <div className="control" id="menu" style={{ color: color }}>
            menu
          </div>

          {/* Forward control */}
          <div className="control" id="forward" style={{ color: color }}>
            <BsSkipForwardFill />
          </div>

          {/* Backward control */}
          <div className="control" id="backward" style={{ color: color }}>
            <BsSkipBackwardFill />
          </div>

          {/* Play/Pause control */}
          <div className="control" id="play-pause" style={{ color: color }}>
            <HiPlayPause />
          </div>
        </div>

        {/* Blank area for additional action (e.g., changing menu forward) */}
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
