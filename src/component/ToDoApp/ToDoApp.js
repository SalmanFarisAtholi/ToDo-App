import React, { Component } from "react";
import "./ToDoApp.css";
export default class ToDoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (index) => {
    const allitems = this.state.items;
    allitems.splice(index, 1);
    this.setState({
      items: allitems,
    });
  };
  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>

          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items.."
          />
        </form>
        <ul>
          {items.map((data, index) => {
            console.log(data);

            return (
              <li key={index}>
                
                {data}
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
