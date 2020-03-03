import React, { Component } from "react";

class List extends Component {
  render() {
    return this.props.images.map(image => {
      return (
        <div key={image.id}>
          <h3>{image.title}</h3>
          <img src={image.url} alt="" />
        </div>
      );
    });
  }
}

export default List;
