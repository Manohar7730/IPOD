import { Component } from "react";
import "../styles/Music.css";

export default class Music extends Component {
  render() {
    return (
      <div className="music">
        <h2>Music</h2>
        <ul>
          <li className="music-option active">All Songs</li>
          <li className="music-option">Albums</li>
          <li className="music-option">Artists</li>
        </ul>
      </div>
    );
  }
}
