import { Component } from "react";
import "../styles/Music.css";

export default class Themes extends Component {
  render() {
    const { ThemeItemsMenu, active } = this.props;

    // Calculate the start and end indices to display a subset of themes
    const startIndex = Math.max(0, active - 1);
    const endIndex = Math.min(ThemeItemsMenu.length, startIndex + 3);

    // Slice the array to get the subset of themes
    const displayedThemes = ThemeItemsMenu.slice(startIndex, endIndex);

    return (
      <div className="music">
        <h2>Theme Select</h2>
        <ul className="song-list">
          {displayedThemes.map((theme, index) => (
            <li
              key={index + startIndex} // Ensure unique keys
              className={`music-option ${
                active === index + startIndex ? "active" : ""
              }`}
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
