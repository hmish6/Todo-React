import React, { Component } from "react";
import InputBox from "../../molecules/InputBox/InputBox";
import store from "../../config/store";
import Button from "../../atoms/Button/Button";

import "./Form.css";
import StartupTemplate from "../StartupTemplate/StartupTemplate";

export default class Form extends Component {
  state = {
    title: ""
  };
  render() {
    return (
      <StartupTemplate>
        <div className="form-base">
          <InputBox
            id="formTitle"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Button text="Submit" className="primary" onClick={this.addRecord} />
        </div>
      </StartupTemplate>
    );
  }
  handleChange = e => {
    this.setState({
      [e.target.getAttribute("name")]: e.target.value
    });
  };

  addRecord = e => {
    store.addStore({ title: this.state.title, status: "pending" });
    this.setState({ title: "" });
  };
}
