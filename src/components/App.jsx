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
    wallpaperItems: [wallpaper1, wallpaper2, wallpaper3],
    wallpaperMenu: ["Lake Boating", "Lonely Tree", "Maldives Sea"],
    wallpaper: 1,
    songItemsUrl: [
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
    songImgItemsUrl: [
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
    songItems: [
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
    themeItems: ["Rose Gold", "Space Gray", "Gold", "Light Purple", "Black"],
    wheelColorMenu: ["Black", "White", "Brown", "Purple"],
  };
  render() {
    const {
      wallpaper,
      wallpaperItems,
      songItems,
      themeItems,
      wallpaperMenu,
      wheelColorMenu,
    } = this.state;
    return (
      <>
        <Knowmore />
        <Case
          wallpaper={wallpaper}
          wallpaperItems={wallpaperItems}
          songItems={songItems}
          themeItems={themeItems}
          wallpaperMenu={wallpaperMenu}
          wheelColorMenu={wheelColorMenu}
        />
      </>
    );
  }
}
