import React, { Component } from "react";

class SignupForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div>Signup:</div>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
