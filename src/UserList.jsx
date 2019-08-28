import React, { Component } from "react";

class UserList extends Component {
  render() {
    const usersList = this.props.users.map(user => {
      return (
        <li
          key={user.id}
          onClick={() => {
            console.log(user);
            this.props.setSelectedUser(user);
          }}
        >
          {" "}
          {user.name}{" "}
        </li>
      );
    });
    return (
      <div>
        <ul>{usersList}</ul>
      </div>
    );
  }
}

export default UserList;
