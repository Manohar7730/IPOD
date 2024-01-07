import { Component } from "react";
import "../styles/App.css";
import Case from "./Case";
import Knowmore from "./Knowmore";

// Importing static assets
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
  // Initial state of the application
  state = {
    // Wallpaper data
    WallpaperItems: [wallpaper1, wallpaper2, wallpaper3], //wallpapers
    WallpaperMenu: ["Lake Boating", "Lonely Tree", "Maldives Sea"],
    wallpaper: 0, //current wallpaper

    // Menu items
    MainMenuItems: ["Playing", "Music", "Games", "Settings"], //main menu Items
    MusicItemsMenu: ["All Songs", "Artists", "Albums"], //music items menu
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
    ], //song items menu
    ThemeItemsMenu: ["Gold", "Silver", "Bronze", "Amethyst"],
    WheelColorMenu: ["Black", "White", "Brown", "Purple"],

    // Song data
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
    ], //songs list
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
    ], //song images list

    // UI and navigation state
    active: 0, //Active list item
    currentMenu: -2, //current menu which is lockScreen initially
    lengthMenuKey: { "-1": 3, 1: 2, 4: 10, 8: 3, 3: 2, 9: 2, 10: 3 }, //length of a particular menu
    menuMapping: {
      "-1": [0, 1, 2, 3],
      1: [4, 5, 6],
      3: [8, 9, 10],
    }, //which menu can be rendered by key menu
    navigationStack: [], //Used for navigation forward and backward

    // Theme and color settings
    wheelColor: "white", //current wheel color
    color: "black",
    theme: "rgb(210, 210, 210)", //current body theme

    // Audio state
    songIndex: 0, //current song
    songImgUrl: song1Img, //current song img for now playing
    audio: new Audio(song1), //current audio file
    playing: false, //playing or not
  };

  // Method to update the active menu item while rotating on the track-wheel
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

  // Method to change menu forward by PRESSING the CENTER BUTTON using NAVIGATION STACK
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

    if (fromMenu === 8) {
      this.setTheme(id);
      return;
    }

    if (fromMenu === 9) {
      this.setWallpaper(id);
      return;
    }

    if (fromMenu === 10) {
      this.setWheelColor(id);
      return;
    }

    if (fromMenu === 7 || fromMenu === 0) {
      this.togglePlayPause();
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

  // Method to change menu backward by PRESSING the MENU BUTTON
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

  // Method to change playing song from music menu
  changePlayingSongFromMusicMenu = (id, navigationStack) => {
    const songUrl = this.state.SongItems[id];
    const songImgUrl = this.state.SongImgItems[id];
    this.state.audio.pause();
    this.setState(
      {
        currentMenu: 0,
        navigationStack: navigationStack,
        active: 0,
        playing: true,
        songIndex: id,
        audio: new Audio(songUrl),
        songImgUrl: songImgUrl,
      },
      () => {
        this.state.audio.play();
      }
    );
  };

  // Method to set wallpaper
  setWallpaper = (id) => {
    this.setState({
      wallpaper: id,
    });
    return;
  };

  // Method to set wheel color
  setWheelColor = (id) => {
    let wheelColor = "";
    let color = "";
    if (id === 0) {
      // Black and gold
      wheelColor = "black";
      color = "#FFD700"; // Gold
    } else if (id === 1) {
      // White and navy blue
      wheelColor = "white";
      color = "#001F3F"; // navy blue
    } else if (id === 2) {
      // Brown and bronze
      wheelColor = "#8B4513"; // Brown
      color = "#CD7F32"; // Bronze
    } else if (id === 3) {
      // Purple and amethyst
      wheelColor = "#800080"; // Purple
      color = "#9966CC"; // Amethyst
    }
    this.setState({
      wheelColor: wheelColor,
      color: color,
    });
  };

  // Method to set theme
  setTheme = (id) => {
    let theme = "";
    let wheelColor = "";
    let color = "";
    if (id === 0) {
      // Gold
      theme = "#FFD700";
      wheelColor = "black";
      color = "#FFD700"; // Gold
    } else if (id === 1) {
      // Silver
      theme = "#C0C0C0";
      wheelColor = "white";
      color = "#001F3F"; // navy Blue
    } else if (id === 2) {
      // Bronze
      theme = "#CD7F32";
      wheelColor = "#8B4513"; // Brown
      color = "#CD7F32"; // Bronze
    } else if (id === 3) {
      // Amethyst
      theme = "#9966CC";
      wheelColor = "#800080"; // Purple
      color = "#9966CC"; // Amethyst
    }
    this.setState({ theme: theme, wheelColor: wheelColor, color: color });
  };

  // Method to seek song forward
  seekSongForward = (e) => {
    if (!this.state.playing) {
      return;
    }

    const interval = e.detail.interval / 100;
    this.setState((prevState) => {
      prevState.audio.currentTime += interval;
      return prevState;
    });
  };

  // Method to seek song reverse
  seekSongReverse = (e) => {
    if (!this.state.playing) {
      return;
    }

    const interval = e.detail.interval / 100;
    this.setState((prevState) => {
      prevState.audio.currentTime -= interval;
      return prevState;
    });
  };

  // Method to toggle play/pause
  togglePlayPause = () => {
    if (this.state.playing) {
      this.setState({ playing: false });
      this.state.audio.pause();
    } else {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  };

  render() {
    // Destructuring state variables for easier access
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
      wheelColor,
      color,
      theme,
      songIndex,
      songImgUrl,
      audio,
      playing,
    } = this.state;

    // Rendering Knowmore and Case components
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
          wheelColor={wheelColor}
          color={color}
          theme={theme}
          songIndex={songIndex}
          playing={playing}
          audio={audio}
          songImgUrl={songImgUrl}
          togglePlayPause={this.togglePlayPause}
          seekSongForward={this.seekSongForward}
          seekSongReverse={this.seekSongReverse}
        />
      </>
    );
  }
}
