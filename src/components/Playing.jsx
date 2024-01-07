import React, { Component } from "react";
import "../styles/Playing.css";

class Playing extends Component {
  state = {
    currentTime: 0,
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setCurrentTime();
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setCurrentTime = () => {
    const { audio } = this.props;
    this.setState({ currentTime: audio.currentTime });
  };

  formatTime = (time) => {
    return `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(
      2,
      "0"
    )}`;
  };

  render() {
    const { SongItemsMenu, playing, songIndex, audio, songImgUrl } = this.props;
    const { currentTime } = this.state;

    const percentageComplete = {
      width: (currentTime / audio.duration) * 100 + "%",
    };

    return (
      <div className="now-playing-container">
        <div className="song-details">
          <img src={songImgUrl} alt="songImg" />
          <div>
            <h1>{SongItemsMenu[songIndex]}</h1>
            <h5 className="play-pause-nav">{playing ? "Playing" : "Paused"}</h5>
          </div>
        </div>
        <div className="status">
          {/* Display current time */}
          {this.formatTime(currentTime)}

          {/* Progress bar */}
          <div id="progress">
            <div style={percentageComplete} id="progress-bar" />
          </div>

          {/* Display total duration */}
          {this.formatTime(isNaN(audio.duration) ? 0 : audio.duration)}
        </div>
      </div>
    );
  }
}

export default Playing;
