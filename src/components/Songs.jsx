import { Component } from "react";
import "../styles/Music.css";

export default class Songs extends Component {
  render() {
    const { SongItemsMenu, active } = this.props;

    // Calculate the start and end indices to display a subset of songs
    const startIndex = Math.max(0, active - 1);
    const endIndex = Math.min(SongItemsMenu.length, startIndex + 3);

    // Slice the array to get the subset of songs
    const displayedSongs = SongItemsMenu.slice(startIndex, endIndex);

    return (
      <div className="music">
        <h2>Songs</h2>
        <ul className="song-list">
          {displayedSongs.map((song, index) => (
            <li
              key={index + startIndex} // Ensure unique keys
              className={`music-option ${
                active === index + startIndex ? "active" : ""
              }`}
            >
              {song}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
