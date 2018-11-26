import React, { Component } from "react";
// import logo from './logo.svg';
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 7 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
      { id: 7, value: 9 },
      { id: 8, value: 0 },
      { id: 9, value: 0 }
    ]
  };

  handleDelete(id) {
    // console.log("Event handler called of ", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({
      counters: counters
    });
  }

  handleReset() {
    console.log("Hello World!!");
    const newCounters = [];
    let tempObj;
    for (let i = 0; i < this.state.counters.length; i++) {
      tempObj = this.state.counters[i];
      tempObj.value = 0;
      newCounters.push(tempObj);
    }

    this.setState({
      counters: newCounters
    });
  }

  handleIncrement(id) {
    let newCounters = [];
    for (let i = 0; i < this.state.counters.length; i++) {
      if (id === this.state.counters[i].id) {
        newCounters.push({
          id: this.state.counters[i].id,
          value: this.state.counters[i].value + 1
        });
      } else {
        newCounters.push({
          id: this.state.counters[i].id,
          value: this.state.counters[i].value
        });
      }
    }
    this.setState({
      counters: newCounters
    });
  }

  handleDecrement(id) {
    let newCounters = [];
    for (let i = 0; i < this.state.counters.length; i++) {
      if (
        id === this.state.counters[i].id &&
        this.state.counters[i].value > 0
      ) {
        newCounters.push({
          id: this.state.counters[i].id,
          value: this.state.counters[i].value - 1
        });
      } else {
        newCounters.push({
          id: this.state.counters[i].id,
          value: this.state.counters[i].value
        });
      }
    }
    this.setState({
      counters: newCounters
    });
  }
  getNoOfItems() {
    let x = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      if (this.state.counters[i].value > 0) {
        ++x;
      }
    }
    if (x > 0) {
      return <b>There are {x} no of items</b>;
    } else {
      return <b>There are no items in the cart</b>;
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar noOfItems={this.getNoOfItems()} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            handleDelete={id => this.handleDelete(id)}
            handleIncrement={id => this.handleIncrement(id)}
            handleDecrement={id => this.handleDecrement(id)}
            handleReset={() => this.handleReset()}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
