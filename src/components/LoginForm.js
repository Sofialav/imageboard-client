import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <h3>Please login to post new pictures:</h3>
          <input
            placeholder="email"
            type="text"
            value={this.props.values.email}
            onChange={this.props.onChange}
            name="email"
          ></input>
          <input
            placeholder="password"
            type="text"
            value={this.props.values.password}
            onChange={this.props.onChange}
            name="password"
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
