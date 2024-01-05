import { Component } from "react";

export default class Themes extends Component {
  render() {
    const { themeItems } = this.props;
    return (
      <div className="music">
        <h2>Theme Select</h2>
        <ul>
          {themeItems.map((theme, index) => (
            <li key={index} className="music-option active">
              {theme}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
