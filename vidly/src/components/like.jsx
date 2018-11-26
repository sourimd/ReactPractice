import React, { Component } from "react";

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }
  returnLikeClass() {
    if (this.state.liked) {
      return "fa fa-heart";
    } else {
      return "fa fa-heart-o";
    }
  }
  handleLike() {
    this.setState({
      liked: !this.state.liked
    });
  }
  render() {
    return (
      <span
        onClick={() => this.handleLike()}
        className={this.returnLikeClass()}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
