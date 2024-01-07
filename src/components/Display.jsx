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

// On the basis of what the current menu is this item will render only that component
// Also this displays the navigation bar
// Key for displaying menu
// {-2: lock screen, -1 : main menu, 0 : now playing, 1: music menu, 2,5,6 : dummy menu, 3: settings menu,4:songs menu, 7:music playing, 8 :themes menu, 9:wheel color menu, 10:wallpaper menu}

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
