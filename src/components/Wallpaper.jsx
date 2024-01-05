import { Component } from "react";

export default class Wallpaper extends Component {
  render() {
    const { wallpaperMenu } = this.props;
    return (
      <div className="music">
        <h2>Wallpapers</h2>
        <ul>
          {wallpaperMenu.map((wallpaper, index) => (
            <li key={index} className="music-option active">
              {wallpaper}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
