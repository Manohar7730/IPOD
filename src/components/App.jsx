import { Component } from "react";
import "../styles/App.css";
import Case from "./Case";
import Knowmore from "./Knowmore";

import wallpaper1 from "../static/wallpapers/lake-boating.jpg";
import wallpaper2 from "../static/wallpapers/lonely-tree.jpg";
import wallpaper3 from "../static/wallpapers/maldives-sea.jpg";

import song1 from "../static/songs/Badass.mp3";
import song2 from "../static/songs/Dum Masala.mp3";
import song3 from "../static/songs/Im Scared.mp3";
import song4 from "../static/songs/Lokiverse 2.0.mp3";
import song5 from "../static/songs/Naa Ready.mp3";
import song6 from "../static/songs/Nijame Ne Chebuthunna.mp3";
import song7 from "../static/songs/Odiyamma.mp3";
import song8 from "../static/songs/Radhika.mp3";
import song9 from "../static/songs/Samayama.mp3";
import song10 from "../static/songs/Ticket Eh Konakunda.mp3";

import song11 from "../static/songs/Uyyaalo Uyyaala.mp3";
import song1Img from "../static/songImgs/Badass.jpg";
import song2Img from "../static/songImgs/Dum masala.jpeg";
import song3Img from "../static/songImgs/im Scared.jpeg";
import song4Img from "../static/songImgs/lokiverse 2.0.jpeg";
import song5Img from "../static/songImgs/naa ready.jpeg";
import song6Img from "../static/songImgs/nijame ney chebutnna.jpeg";
import song7Img from "../static/songImgs/odiyamma.jpeg";
import song8Img from "../static/songImgs/Radhika.jpeg";
import song9Img from "../static/songImgs/samayamaa.jpeg";
import song10Img from "../static/songImgs/ticket eh konakunda.jpeg";
import song11Img from "../static/songImgs/Uyyalo uyyala.jpeg";

export default class App extends Component {
  state = {
    WallpaperItems: [wallpaper1, wallpaper2, wallpaper3],
    WallpaperMenu: ["Lake Boating", "Lonely Tree", "Maldives Sea"],
    wallpaper: 1,
    MainMenuItems: ["Playing", "Music", "Games", "Settings"],
    MusicItemsMenu: ["All Songs", "Artists", "Albums"],
    SettingsMenu: ["Themes", "Wallpaper", "WheelColor"],
    SongItemsMenu: [
      "Badass",
      "Dum Masala",
      "Im Scared",
      "Lokiverse 2.0",
      "Naa Ready",
      "Nijame Ne Chebuthunna",
      "odiyamma",
      "Radhika",
      "Samayama",
      "ticket eh konakunda",
      "Uyyalo uyyala",
    ],
    ThemeItemsMenu: [
      "Rose Gold",
      "Space Gray",
      "Gold",
      "Light Purple",
      "Black",
    ],
    WheelColorMenu: ["Black", "White", "Brown", "Purple"],
    SongItems: [
      song1,
      song2,
      song3,
      song4,
      song5,
      song6,
      song7,
      song8,
      song9,
      song10,
      song11,
    ],
    SongImgItems: [
      song1Img,
      song2Img,
      song3Img,
      song4Img,
      song5Img,
      song6Img,
      song7Img,
      song8Img,
      song9Img,
      song10Img,
      song11Img,
    ],
    active: 0,
    currentMenu: -2,
    lengthMenuKey: { "-1": 3, 1: 2, 4: 10, 8: 4, 3: 2, 9: 2, 10: 3 },
    menuMapping: {
      "-1": [0, 1, 2, 3],
      1: [4, 5, 6],
      3: [8, 9, 10],
    },
    navigationStack: [],
  };

  updateActiveMenu = (direction, menu) => {
    if (
      menu !== -1 &&
      menu !== 1 &&
      menu !== 3 &&
      menu !== 4 &&
      menu !== 8 &&
      menu !== 9 &&
      menu !== 10
    ) {
      return;
    }
    let min = 0;
    let max = 0;
    max = this.state.lengthMenuKey[menu];
    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min });
      } else {
        this.setState({ active: this.state.active + 1 });
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max });
      } else {
        this.setState({ active: this.state.active - 1 });
      }
    }
  };

  changeMenuForward = (id, fromMenu) => {
    const navigationStack = [...this.state.navigationStack];
    if (
      fromMenu !== -2 &&
      fromMenu !== -1 &&
      fromMenu !== 1 &&
      fromMenu !== 4 &&
      fromMenu !== 3 &&
      fromMenu !== 8 &&
      fromMenu !== 9 &&
      fromMenu !== 0 &&
      fromMenu !== 7 &&
      fromMenu !== 10
    ) {
      return;
    }

    if (fromMenu === -2) {
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: -1,
        navigationStack: navigationStack,
        active: 0,
      });
      return;
    }

    if (fromMenu === -1) {
      navigationStack.push(this.state.currentMenu);
      this.setState({
        currentMenu: id,
        navigationStack: navigationStack,
        active: 0,
      });
      return;
    }

    if (fromMenu === 4) {
      this.changePlayingSongFromMusicMenu(id, navigationStack, fromMenu);
      return;
    }

    navigationStack.push(this.state.currentMenu);

    const currentMenuID = this.state.menuMapping[fromMenu][id];
    this.setState({
      currentMenu: currentMenuID,
      navigationStack: navigationStack,
      active: 0,
    });
  };

  changeMenuBackward = () => {
    const navigationStack = [...this.state.navigationStack];
    if (this.state.currentMenu === -2) {
      console.log("Can't navigate backward");
      return;
    } else {
      const prevId = navigationStack.pop();
      this.setState({
        currentMenu: prevId,
        navigationStack: navigationStack,
        active: 0,
      });
    }
  };

  changePlayingSongFromMusicMenu = (id, navigationStack) => {
    this.setState({
      currentMenu: 7 || 0,
      navigationStack: navigationStack,
      active: 0,
    });
  };

  render() {
    const {
      wallpaper,
      WallpaperItems,
      WallpaperMenu,
      MainMenuItems,
      MusicItemsMenu,
      SongItemsMenu,
      ThemeItemsMenu,
      WheelColorMenu,
      SettingsMenu,
      active,
      currentMenu,
    } = this.state;

    return (
      <>
        <Knowmore />
        <Case
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
          updateActiveMenu={this.updateActiveMenu}
          changeMenuForward={this.changeMenuForward}
          changeMenuBackward={this.changeMenuBackward}
        />
      </>
    );
  }
}
