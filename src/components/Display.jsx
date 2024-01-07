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
import Playing from "./Playing";

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
      songIndex,
      songImgUrl,
      audio,
      playing,
    } = this.props;
    console.log(currentMenu, active);
    return (
      <>
        <div
          className="display"
          style={{ backgroundImage: `url(${WallpaperItems[wallpaper]})` }}
        >
          <Navbar />
          {currentMenu == -2 && <LockScreen />}
          {currentMenu == -1 && (
            <Menu MainMenuItems={MainMenuItems} active={active} />
          )}
          {currentMenu == 1 && (
            <Music MusicItemsMenu={MusicItemsMenu} active={active} />
          )}
          {currentMenu == 2 && <Games />}
          {currentMenu == 3 && (
            <Settings SettingsMenu={SettingsMenu} active={active} />
          )}
          {currentMenu == 4 && (
            <Songs SongItemsMenu={SongItemsMenu} active={active} />
          )}
          {currentMenu == 5 && (
            <div className="blank-div">
              <div className="empty-text">Artists</div>
            </div>
          )}
          {currentMenu == 6 && (
            <div className="blank-div">
              <div className="empty-text">Albums</div>
            </div>
          )}
          {(currentMenu == 7 || currentMenu == 0) && (
            <Playing
              songImgUrl={songImgUrl}
              audio={audio}
              playing={playing}
              songIndex={songIndex}
              SongItemsMenu={SongItemsMenu}
            />
          )}
          {currentMenu == 8 && (
            <Themes ThemeItemsMenu={ThemeItemsMenu} active={active} />
          )}
          {currentMenu == 9 && (
            <Wallpaper WallpaperMenu={WallpaperMenu} active={active} />
          )}
          {currentMenu == 10 && (
            <WheelColor WheelColorMenu={WheelColorMenu} active={active} />
          )}
        </div>
      </>
    );
  }
}
