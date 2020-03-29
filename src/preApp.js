import React from "react";
import ReactDOM from "react-dom";
import api, { etymoApi } from "./api";
import axios from "axios";

class Wordboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: null,
      searchTerm: "internet"
    };
  }
  componentDidMount() {
    console.log("hi");
    this.setState((state, props) => ({
      name: props.name,
      styleName: props.styleName,
      posX: props.posX,
      posY: props.posY
    }));
  }

  componentWillUnmount() {}
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return hello;
  }
}
export default Wordboard;
