import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    // Fetching the data and taking the response and turning it in JSON. Then we take the users and set our monsters to that array of users.
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ monsters: users }))
    );
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search monsters" />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
