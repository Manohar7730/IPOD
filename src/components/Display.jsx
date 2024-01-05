import { Component } from "react";
import "../styles/Display.css";
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";
import Menu from "./Menu";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./Music";
import Songs from "./Songs";
import Themes from "./Themes";
import Wallpaper from "./Wallpaper";
import WheelColor from "./WheelColor";

export default class Display extends Component {
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
        <div
          className="display"
          style={{ backgroundImage: `url(${wallpaperItems[wallpaper]})` }}
        >
          <Navbar />
          {/* <LockScreen /> */}
          {/* <Menu /> */}
          {/* <Games /> */}
          {/* <Settings /> */}
          {/* <Music /> */}
          {/* <Songs songItems={songItems} /> */}
          {/* <div className="blank-div">
            <div className="empty-text">Albums</div>
          </div> */}
          {/* <div className="blank-div">
            <div className="empty-text">Artists</div>
          </div> */}
          {/* <Themes themeItems={themeItems} /> */}
          {/* <Wallpaper wallpaperMenu={wallpaperMenu} /> */}
          <WheelColor wheelColorMenu={wheelColorMenu} />
        </div>
      </>
    );
  }
}
