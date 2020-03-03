import React, { Component } from "react";

class UsersList extends Component {
  render() {
    const list = this.props.users.map(user => {
      return (
        <div>
          <li key={user.id}>{user.email}</li>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default UsersList;
