import { Component } from "react";
import "../styles/KnowMore.css";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default class Knowmore extends Component {
  state = {
    showDetails: false,
  };

  toggleDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { showDetails } = this.state;

    return (
      <div className="more-container">
        <div
          className="info"
          onClick={this.toggleDetails}
          style={{
            backgroundColor: showDetails ? "red" : "#1900ff",
          }}
        >
          {showDetails ? <IoIosCloseCircleOutline /> : <CiCircleInfo />}
        </div>
        {showDetails && (
          <div className="details-container">
            <h3>controls</h3>
            <ol>
              <li>
                To unlock screen you have to press center button and to lock
                screen you have to press menu button in main menu.
              </li>
              <li>
                To play and pause music in any menu you need to press play/pause
                button on bottom.
              </li>
              <li>
                Short pressing on forward/reverse will take you to next/previous
                track (ONLY WHILE PLAYING)
              </li>
              <li>
                Long pressing on forward/reverse will seek the song in
                forward/reverse (ONLY WHILE PLAYING)
              </li>
              <li>
                To navigate between a menu items you need to rotate on track
                wheel
              </li>
              <li>
                To go to next menu or go inside a menu press center button and
                to go to previous menu press menu button
              </li>
              <li>
                Please checkout settings menu to change
                theme,wheelColor,wallpaper
              </li>
              <li>
                Github-Link : <a href="">ipod</a>
              </li>
              <li>
                Hosting-Link : <a href="">ipod-hoisted</a>
              </li>
              <li>
                App Developed by : <a href="">manohar</a>
              </li>
            </ol>
          </div>
        )}
      </div>
    );
  }
}
