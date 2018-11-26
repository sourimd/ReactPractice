import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.value
  // };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  // handleDecrement = () => {
  //   if (this.state.count > 0) {
  //     this.setState({
  //       count: this.state.count - 1
  //     });
  //   }
  // };

  render() {
    // console.log("props", this.props);
    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <span style={this.styles} className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
            </div>
            <div class="col-sm">
              <button
                // onClick={() => this.handleIncrement({ id: 318 })}
                onClick={this.props.onIncrement}
                className="btn btn-secondary btn-sm m-2"
              >
                <i className="fa fa-plus" aria-hidden="true" />
              </button>
              <button
                // onClick={this.handleDecrement}
                onClick={this.props.onDecrement}
                className="btn btn-secondary btn-sm m-2"
                disabled={!this.props.value}
              >
                <i className="fa fa-minus" aria-hidden="true" />
              </button>
              <button
                className="btn btn-danger btn-sm m-2"
                onClick={this.props.onDelete}
              >
                <i className="fa fa-times" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    if (this.props.value === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }
    return classes;
  }

  formatCount() {
    if (this.props.value === 0) {
      return "Zero";
    } else {
      return this.props.value;
    }
  }
}

export default Counter;
