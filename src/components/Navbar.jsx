import { Component } from "react";
import "../styles/Navbar.css";
import Battery from "../static/battery.png";

export default class Navbar extends Component {
  state = {
    time: this.getCurrentTime(),
    batteryLevel: null,
  };

  componentDidMount() {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        this.updateBatteryStatus();
        battery.addEventListener("levelchange", this.updateBatteryStatus);
      });
    } else {
      this.setState({ batteryLevel: null });
    }

    this.intervalId = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        battery.removeEventListener("levelchange", this.updateBatteryStatus);
      });
    }

    clearInterval(this.intervalId);
  }

  updateBatteryStatus = () => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        this.setState({
          batteryLevel: Math.floor(battery.level * 100),
        });
      });
    }
  };

  getCurrentTime() {
    const today = new Date();
    let time =
      today.getHours() +
      ":" +
      (today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes() +
      ":" +
      (today.getSeconds() < 10 ? "0" : "") +
      today.getSeconds();
    return time;
  }

  render() {
    const { time, batteryLevel } = this.state;

    return (
      <div className="bar">
        <h5 className="heading">IPOD</h5>
        <h3 className="time">{time}</h3>
        <div className="right-container-nav">
          {batteryLevel !== null ? (
            <div className="battery">{`${batteryLevel}%`}</div>
          ) : (
            <img className="battery-image" src={Battery} alt="Battery Image" />
          )}
        </div>
      </div>
    );
  }
}
