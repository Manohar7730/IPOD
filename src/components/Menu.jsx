import { Component } from "react";
import "../styles/Menu.css";
import MusicImg from "../static/music.jpg";
import GamesImg from "../static/game.jpg";
import SettingsImg from "../static/settings.png";
import CoverImg from "../static/coverflow.jpg";

export default class Menu extends Component {
  render() {
    const { MainMenuItems, active } = this.props;
    return (
      <div className="menu">
        <ul className="main-menu">
          {MainMenuItems.map((element, index) => (
            <li
              key={index}
              className={`option ${active === index ? "active" : ""}`}
            >
              {element}
            </li>
          ))}
        </ul>
        <div className="imageContainer">
          {active === 0 && <img src={CoverImg} alt="cover" className="image" />}
          {active === 1 && <img src={MusicImg} alt="music" className="image" />}
          {active === 2 && <img src={GamesImg} alt="games" className="image" />}
          {active === 3 && (
            <img src={SettingsImg} alt="settings" className="image" />
          )}
        </div>
      </div>
    );
  }
}
