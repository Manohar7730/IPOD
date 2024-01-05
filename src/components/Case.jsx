import { Component } from "react";
import "../styles/Case.css";
import Display from "./Display";
import Wheel from "./Wheel";

export default class Case extends Component {
  render() {
    const { wallpaper, wallpaperItems } = this.props;

    return (
      <>
        <div className="case">
          <Display wallpaper={wallpaper} wallpaperItems={wallpaperItems} />
          <Wheel />
        </div>
      </>
    );
  }
}
