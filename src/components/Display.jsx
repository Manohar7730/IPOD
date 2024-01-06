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
      currentMenu,
    } = this.props;
    return (
      <>
        <div
          className="display"
          style={{ backgroundImage: `url(${WallpaperItems[wallpaper]})` }}
        >
          <Navbar />
          {currentMenu == 0 && <LockScreen />}
          {currentMenu == 1 && (
            <Menu MainMenuItems={MainMenuItems} active={active} />
          )}
          {currentMenu == 3 && (
            <Music MusicItemsMenu={MusicItemsMenu} active={active} />
          )}
          {currentMenu == 4 && <Games />}
          {currentMenu == 5 && (
            <Settings SettingsMenu={SettingsMenu} active={active} />
          )}
          {currentMenu == 6 && (
            <Songs SongItemsMenu={SongItemsMenu} active={active} />
          )}
          {currentMenu == 8 && (
            <div className="blank-div">
              <div className="empty-text">Artists</div>
            </div>
          )}
          {currentMenu == 9 && (
            <div className="blank-div">
              <div className="empty-text">Albums</div>
            </div>
          )}
          {(currentMenu == 10 || currentMenu == 2) && (
            <div className="blank-div">
              <div className="empty-text">Playing</div>
            </div>
          )}
          {currentMenu == 11 && (
            <Themes ThemeItemsMenu={ThemeItemsMenu} active={active} />
          )}
          {currentMenu == 12 && (
            <Wallpaper WallpaperMenu={WallpaperMenu} active={active} />
          )}
          {currentMenu == 13 && (
            <WheelColor WheelColorMenu={WheelColorMenu} active={active} />
          )}
        </div>
      </>
    );
  }
}
