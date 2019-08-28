import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList.jsx";
import User from "./User";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Saurabh",
        age: 18
      },
      {
        id: 2,
        name: "h",
        age: 12
      },
      {
        id: 3,
        name: "f",
        age: 54
      },
      {
        id: 4,
        name: "asdjk",
        age: 13
      }
    ]
  };

  setSelectedUser = user => {
    this.setState({
      selectedUser: user
    });
  };

  updateUser = userToUpdate => {
    const updatedList = this.state.users.map(user => {
      if (user.id === userToUpdate.id)
        return {
          id: userToUpdate.id,
          name: userToUpdate.name,
          age: userToUpdate.age
        };
      return user;
    });
    this.setState({
      users: updatedList
    });
  };

  render() {
    return (
      <div>
        <UserList
          users={this.state.users}
          setSelectedUser={this.setSelectedUser}
        />
        {this.state.selectedUser && (
          <User user={this.state.selectedUser} updateUser={this.updateUser} />
        )}
      </div>
    );
  }
}

export default App;
