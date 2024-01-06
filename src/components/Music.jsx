import React, { Component } from "react";
import "../styles/Music.css";

class Music extends Component {
  render() {
    const { MusicItemsMenu, active } = this.props;

    const startIndex = Math.max(0, active - 1);
    const endIndex = Math.min(MusicItemsMenu.length, startIndex + 3);

    const displayedMusicItems = MusicItemsMenu.slice(startIndex, endIndex);

    return (
      <div className="music">
        <h2>Music</h2>
        <ul className="song-list">
          {displayedMusicItems.map((musicItem, index) => (
            <li
              key={index + startIndex}
              className={`music-option ${
                active === index + startIndex ? "active" : ""
              }`}
            >
              {musicItem}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Music;
