import { Component } from "react";
import "../styles/Music.css";

export default class Wallpaper extends Component {
  render() {
    const { WallpaperMenu, active } = this.props;

    // Calculate the start and end indices to display a subset of wallpapers
    const startIndex = Math.max(0, active - 1);
    const endIndex = Math.min(WallpaperMenu.length, startIndex + 3);

    // Slice the array to get the subset of wallpapers
    const displayedWallpapers = WallpaperMenu.slice(startIndex, endIndex);

    return (
      <div className="music">
        <h2>Wallpapers</h2>
        <ul className="song-list">
          {displayedWallpapers.map((wallpaper, index) => (
            <li
              key={index + startIndex} // Ensure unique keys
              className={`music-option ${
                active === index + startIndex ? "active" : ""
              }`}
            >
              {wallpaper}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
