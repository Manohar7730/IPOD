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
      currentMenu,
      updateActiveMenu,
      changeMenuForward,
      changeMenuBackward,
      wheelColor,
      color,
      theme,
    } = this.props;

    return (
      <>
        <div className="case" style={{ backgroundColor: theme }}>
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
            currentMenu={currentMenu}
          />
          <Wheel
            updateActiveMenu={updateActiveMenu}
            currentMenu={currentMenu}
            active={active}
            changeMenuForward={changeMenuForward}
            changeMenuBackward={changeMenuBackward}
            wheelColor={wheelColor}
            color={color}
            theme={theme}
          />
        </div>
      </>
    );
  }
}
