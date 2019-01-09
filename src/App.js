import React, { Component } from "react";
import "./App.css";
import ChildComponent from "./components/childComponent";

class App extends Component {
  state = {
    value: ""
  };

  constructor(props) {
    super(props);
    console.log("parent construtor");
  }

  componentWillMount() {
    console.log("parent componentWillMount", this.state.value);
  }

  componentDidMount() {
    console.log("parent componentDidMount", this.state.value);
  }

  componentWillReceiveProps(nextProps) {
    console.log("parent componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("parent shouldComponentUpdate", this.state.value);
    return true; // 记得要返回true
  }

  componentWillUpdate() {
    console.log("parent componentWillUpdate", this.state.value);
  }

  componentDidUpdate() {
    console.log("parent componentDidUpdate", this.state.value);
  }

  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  handleValueChange = value => {
    this.setState({ value: value });
    console.log("handleValueChange", this.state.value);
  };

  getBoolean = () => {
    if (this.state.value) {
      return true;
    }
    return false;
  };

  render() {
    console.log("parent render", this.state.value);
    return (
      <div>
        <div>
          <p>parent</p>
          <button
            onClick={() => {
              this.handleValueChange("parent");
            }}
          >
            Click
          </button>
          <p>value-{this.state.value}</p>
          <p>boolean-{this.getBoolean()}</p>
        </div>
        <ChildComponent
          onValueChange={this.handleValueChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
