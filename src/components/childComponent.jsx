import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
  }

  componentWillMount() {
    console.log("child componentWillMount");
  }

  componentDidMount() {
    console.log("child componentDidMount");
    console.log("here");
  }

  componentWillReceiveProps(nextProps) {
    console.log("child componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("child shouldComponentUpdate");
    return true; // 记得要返回true
  }

  componentWillUpdate() {
    console.log("child componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    console.log("child render");
    return (
      <div>
        <div>child</div>
        <button onClick={() => this.props.onValueChange("child")}>Click</button>
        <div>parentValue-{this.props.value}</div>
      </div>
    );
  }
}

export default ChildComponent;
