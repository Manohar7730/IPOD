import { Component } from "react";

export default class WheelColor extends Component {
  render() {
    const { wheelColorMenu } = this.props;
    return (
      <div className="music">
        <h2>Wheel Color</h2>
        <ul>
          {wheelColorMenu.map((WheelColor, index) => (
            <li key={index} className="music-option active">
              {WheelColor}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
