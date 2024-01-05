import { Component } from "react";
import "../styles/Case.css";
import Display from "./Display";
import Wheel from "./Wheel";

export default class Case extends Component {
  render() {
    const {
      wallpaper,
      wallpaperItems,
      songItems,
      themeItems,
      wallpaperMenu,
      wheelColorMenu,
    } = this.props;

    return (
      <>
        <div className="case">
          <Display
            wallpaper={wallpaper}
            wallpaperItems={wallpaperItems}
            songItems={songItems}
            themeItems={themeItems}
            wallpaperMenu={wallpaperMenu}
            wheelColorMenu={wheelColorMenu}
          />
          <Wheel />
        </div>
      </>
    );
  }
}
