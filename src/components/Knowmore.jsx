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
      <>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate delectus, itaque, asperiores eos fugit excepturi
                  eligendi, nulla incidunt rem saepe distinctio impedit dicta!
                  Amet id, excepturi neque saepe accusantium corrupti?
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
      </>
    );
  }
}
