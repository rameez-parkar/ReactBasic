import React, { Component } from "react";

class User extends Component {
  state = {
    name: this.props.user.name,
    age: this.props.user.age,
    id: this.props.user.id
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.user.name,
      age: nextProps.user.age,
      id: nextProps.user.id
    });
  }

  render() {
    return (
      <div>
        Name:{" "}
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        Age:{" "}
        <input
          type="text"
          value={this.state.age}
          onChange={e => this.setState({ age: e.target.value })}
        />
        <br />
        <button
          onClick={() =>
            this.props.updateUser({
              name: this.state.name,
              age: this.state.age,
              id: this.state.id
            })
          }
        >
          Update
        </button>
      </div>
    );
  }
}

export default User;
