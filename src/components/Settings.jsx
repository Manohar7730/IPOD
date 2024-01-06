// Importing necessary modules
import React, { Component } from "react";
import "../styles/Music.css";

// Defining the Settings component
class Settings extends Component {
  render() {
    // Destructuring props to get SettingsMenu and active
    const { SettingsMenu, active } = this.props;

    // Calculate the start and end indices to display a subset of settings
    const startIndex = Math.max(0, active - 1);
    const endIndex = Math.min(SettingsMenu.length, startIndex + 3);

    // Get a subset of settings based on calculated indices
    const displayedSettings = SettingsMenu.slice(startIndex, endIndex);

    // Render the Settings component
    return (
      <div className="music">
        <h2>Settings</h2>
        {/* Display a list of settings */}
        <ul className="song-list">
          {/* Map over the displayed settings and create list items */}
          {displayedSettings.map((setting, index) => (
            <li
              key={index + startIndex} // Ensure each key is unique
              className={`music-option ${
                active === index + startIndex ? "active" : ""
              }`}
            >
              {setting}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Exporting the Settings component as the default export
export default Settings;
