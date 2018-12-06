import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset Counts
        </button>

        <button
          onClick={this.props.onRestart}
          className="btn btn-primary btn-sm m-2"
        >
          RESTART
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}
