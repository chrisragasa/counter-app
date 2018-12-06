import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  // Deletes a counter
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  // Increments a counter
  handleIncrement = counter => {
    const counters = [...this.state.counters]; // Create clone of current state, using spread syntax
    const index = counters.indexOf(counter); // Find index of counter from counters array
    counters[index] = { ...counter }; // Create new clone of counter obj passed as argument
    counters[index].value++;
    this.setState({ counters });
  };

  // Resets counter values
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // Resets all counters to original state
  handleRestart = () => {
    const counters = [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ];
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
