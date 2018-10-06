import React, { Component } from "react";
import ListBox from "../../organisms/ListBox/ListBox";
import store from "../../config/store";
import StartupTemplate from "../StartupTemplate/StartupTemplate";

export default class Completed extends Component {
  state = {
    tasks: store.getStore().filter(task => task.status === "completed")
  };
  render() {
    return (
      <StartupTemplate>
        <ListBox>
          {this.state.tasks.map(task => (
            <ListBox.Item
              key={task.id}
              text={task.title}
              action="x"
              type="completed"
              onClick={() => this.handleClick(task.id)}
            />
          ))}
        </ListBox>
      </StartupTemplate>
    );
  }
  handleClick = id => {
    store.deleteTask(id);
    this.setState({
      tasks: store.getStore().filter(task => task.status === "completed")
    });
  };
}
