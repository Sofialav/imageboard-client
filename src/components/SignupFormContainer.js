import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import { signup } from "../actions";

class SignupFormContainer extends Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({ email: "", password: "" });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { signup })(SignupFormContainer);
