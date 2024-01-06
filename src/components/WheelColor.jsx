import { Component } from "react";
import "../styles/Music.css";

export default class WheelColor extends Component {
  render() {
    const { WheelColorMenu, active } = this.props;

    // Calculate the start and end indices to display a subset of wheel colors
    const startIndex = Math.max(0, active - 1);
    const endIndex = Math.min(WheelColorMenu.length, startIndex + 3);

    // Slice the array to get the subset of wheel colors
    const displayedWheelColors = WheelColorMenu.slice(startIndex, endIndex);

    return (
      <div className="music">
        <h2>Wheel Color</h2>
        <ul className="song-list">
          {displayedWheelColors.map((WheelColor, index) => (
            <li
              key={index + startIndex} // Ensure unique keys
              className={`music-option ${
                active === index + startIndex ? "active" : ""
              }`}
            >
              {WheelColor}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
