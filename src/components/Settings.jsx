import { Component } from "react";
import "../styles/Settings.css";

export default class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <ul>
          <div className="setting-option">Themes</div>
          <div className="setting-option active">Wheel Color</div>
          <div className="setting-option">Wallpaper</div>
        </ul>
      </div>
    );
  }
}
