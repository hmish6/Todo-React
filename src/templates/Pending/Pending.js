import React, { Component } from "react";
import ListBox from "../../organisms/ListBox/ListBox";
import store from "../../config/store";
import StartupTemplate from "../StartupTemplate/StartupTemplate";

export default class Pending extends Component {
  state = {
    tasks: store.getStore().filter(task => task.status === "pending")
  };
  render() {
    return (
      <StartupTemplate>
        <ListBox>
          {this.state.tasks.map(task => (
            <ListBox.Item
              key={task.id}
              text={task.title}
              action="&#10004;"
              type="pending"
              onClick={() => this.handleClick(task.id)}
            />
          ))}
        </ListBox>
      </StartupTemplate>
    );
  }
  handleClick(id) {
    store.updateStatus(id);
    this.setState({
      tasks: store.getStore().filter(task => task.status === "pending")
    });
  }
}
