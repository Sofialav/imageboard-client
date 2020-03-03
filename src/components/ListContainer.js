import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    if (!this.props.images) {
      return <div>Loading...</div>;
    }
    const displayImages = this.props.images.map(image => {
      return <List images={image} />;
    });
    if (!this.props.user) {
      return (
        <div>
          <LoginFormContainer />
          <div>{displayImages}</div>
        </div>
      );
    }
    return (
      <div>
        <CreateFormContainer />
        <div>{displayImages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images, user: state.user };
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
