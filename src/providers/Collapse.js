import { Component } from "react";

class Collapse extends Component {
  state = {
    isCollapsed: false,
  };
  toggle = () => {
    this.setState((prevState) => {
      return {
        isCollapsed: !prevState.isCollapsed,
      };
    });
  };
  render() {
    const renderProps = {
      isCollapsed: this.state.isCollapsed,
      toggle: this.toggle,
    };
    return this.props.render(renderProps);
  }
}

export default Collapse;
