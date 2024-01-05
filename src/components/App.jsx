import { Component } from "react";
import "../styles/App.css";
import Case from "./Case";
import Knowmore from "./Knowmore";

export default class App extends Component {
  render() {
    return (
      <>
        <Knowmore />
        <Case />
      </>
    );
  }
}
