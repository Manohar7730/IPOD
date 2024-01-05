import { Component } from "react";
import "../styles/App.css";
import Case from "./Case";
import Knowmore from "./Knowmore";
import wallpaper1 from "../static/wallpapers/lake-boating.jpg";
import wallpaper2 from "../static/wallpapers/lonely-tree.jpg";
import wallpaper3 from "../static/wallpapers/maldives-sea.jpg";

export default class App extends Component {
  state = {
    wallpaperItems: [wallpaper1, wallpaper2, wallpaper3],
    wallpaper: 0,
  };
  render() {
    const { wallpaper, wallpaperItems } = this.state;
    return (
      <>
        <Knowmore />
        <Case wallpaper={wallpaper} wallpaperItems={wallpaperItems} />
      </>
    );
  }
}
