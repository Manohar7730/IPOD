import { Component } from "react";
import "../styles/Case.css";
import Display from "./Display";
import Wheel from "./Wheel";

export default class Case extends Component {
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
        <div className="case">
          <Display
            wallpaper={wallpaper}
            WallpaperItems={WallpaperItems}
            WallpaperMenu={WallpaperMenu}
            MainMenuItems={MainMenuItems}
            MusicItemsMenu={MusicItemsMenu}
            SettingsMenu={SettingsMenu}
            SongItemsMenu={SongItemsMenu}
            ThemeItemsMenu={ThemeItemsMenu}
            WheelColorMenu={WheelColorMenu}
            active={active}
          />
          <Wheel />
        </div>
      </>
    );
  }
}
