import { Component } from "react";
import "../styles/Music.css";

export default class Songs extends Component {
  render() {
    const { songItems } = this.props;
    return (
      <div className="music">
        <h2>Songs</h2>
        <ul>
          {songItems.map((song, index) => (
            <li key={index} className="music-option active">
              {song}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
