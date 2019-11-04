import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  state = {
    monsters: []
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
        <CardList monsters={this.state.monsters}>
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
