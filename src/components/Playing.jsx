import React, { Component } from "react";
import "../styles/Playing.css";

class Playing extends Component {
  state = {
    currentTime: 0,
  };

  // Interval ID to periodically update the current time
  intervalId = null;

  // Set up an interval to update the current time every 100 milliseconds
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setCurrentTime();
    }, 100);
  }

  // Clear the interval when the component is unmounted to avoid memory leaks
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Update the current time based on the audio's current time
  setCurrentTime = () => {
    const { audio } = this.props;
    this.setState({ currentTime: audio.currentTime });
  };

  // Format the time in minutes and seconds for display
  formatTime = (time) => {
    return `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(
      2,
      "0"
    )}`;
  };

  render() {
    // Destructure props and state for easier access
    const { SongItemsMenu, playing, songIndex, audio, songImgUrl } = this.props;
    const { currentTime } = this.state;

    // Calculate the percentage completion for the progress bar
    const percentageComplete = {
      width: (currentTime / audio.duration) * 100 + "%",
    };

    return (
      <div className="now-playing-container">
        <div className="song-details">
          {/* Display song image and details */}
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
