import { Component } from "react";
import "../styles/Menu.css";
import MusicImg from "../static/music.jpg";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="main-menu">
          <li className="option">Playing</li>
          <li className="option active">Music</li>
          <li className="option">Games</li>
          <li className="option">Settings</li>
        </ul>
        <div className="imageContainer">
          <img src={MusicImg} alt="music" className="image" />
        </div>
      </div>
    );
  }
}
