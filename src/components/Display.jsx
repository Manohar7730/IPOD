import { Component } from "react";
import "../styles/Display.css";
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";
import Menu from "./Menu";
import Games from "./Games";

export default class Display extends Component {
  render() {
    const { wallpaper, wallpaperItems } = this.props;
    return (
      <>
        <div
          className="display"
          style={{ backgroundImage: `url(${wallpaperItems[wallpaper]})` }}
        >
          <Navbar />
          {/* <LockScreen /> */}
          {/* <Menu /> */}
          <Games />
        </div>
      </>
    );
  }
}
