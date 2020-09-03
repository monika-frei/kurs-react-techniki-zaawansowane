import React, { Component } from "react";

const withAuth = (WrappedComponent) => {
  return class WithAuth extends Component {
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
      const { isAuthorised } = this.state;
      return (
        <WrappedComponent
          isAuthorised={isAuthorised}
          toggleAuth={this.toggleAuth}
          {...this.props}
        />
      );
    }
  };
};

export default withAuth;
