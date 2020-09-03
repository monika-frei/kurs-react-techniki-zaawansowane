import { Component } from "react";

class Auth extends Component {
  state = {
    isAuthorised: true,
  };
  toggleAuth = () => {
    this.setState((prevState) => {
      return {
        isAuthorised: !prevState.isAuthorised,
      };
    });
  };
  render() {
    const renderProps = {
      isAuthorised: this.state.isAuthorised,
      toggleAuth: this.toggleAuth,
    };
    return this.props.render(renderProps);
  }
}

export default Auth;
