import React, { Component } from "react";

class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder="url"
            type="text"
            value={this.props.values.url}
            onChange={this.props.onChange}
            name="url"
          ></input>
          <input
            placeholder="title"
            type="text"
            value={this.props.values.title}
            onChange={this.props.onChange}
            name="title"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
