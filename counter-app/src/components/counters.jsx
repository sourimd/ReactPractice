import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="btn bth-primary m-2"
          onClick={() => this.props.handleReset()}
        >
          Reset
        </button>
        <br />
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            // onDelete={this.handleDelete}
            onDelete={() => this.props.handleDelete(counter.id)}
            onIncrement={() => this.props.handleIncrement(counter.id)}
            onDecrement={() => this.props.handleDecrement(counter.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
