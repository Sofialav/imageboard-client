import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div key={this.props.images.id}>
        <h3>{this.props.images.title}</h3>
        <img src={this.props.images.url} alt="" />
      </div>
    );
  }
}

export default List;
