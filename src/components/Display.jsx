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
      WallpaperItems,
      WallpaperMenu,
      MainMenuItems,
      MusicItemsMenu,
      SettingsMenu,
      SongItemsMenu,
      ThemeItemsMenu,
      WheelColorMenu,
      active,
    } = this.props;
    return (
      <>
        <div
          className="display"
          style={{ backgroundImage: `url(${WallpaperItems[wallpaper]})` }}
        >
          <Navbar />
          {/* <LockScreen /> */}
          {/* <Menu MainMenuItems={MainMenuItems} active={active} /> */}
          {/* <Music MusicItemsMenu={MusicItemsMenu} active={active} /> */}
          {/* <Games /> */}
          {/* <Settings SettingsMenu={SettingsMenu} active={active} /> */}
          {/* <Songs SongItemsMenu={SongItemsMenu} active={active} /> */}
          {/* <div className="blank-div">
            <div className="empty-text">Albums</div>
          </div> */}
          {/* <div className="blank-div">
            <div className="empty-text">Playing</div>
          </div> */}
          {/* <div className="blank-div">
            <div className="empty-text">Artists</div>
          </div> */}
          <Themes ThemeItemsMenu={ThemeItemsMenu} active={active} />
          {/* <Wallpaper WallpaperMenu={WallpaperMenu} active={active} /> */}
          {/* <WheelColor WheelColorMenu={WheelColorMenu} active={active} /> */}
        </div>
      </>
    );
  }
}
