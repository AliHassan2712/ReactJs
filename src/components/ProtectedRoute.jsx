import React from "react";
import Header from "./Header";

import { Form, Navigate, Outlet } from "react-router-dom";
class ProtectedRoute extends React.Component {
  render() {
    return (
      <>
        {this.props.isAuth ? (
          <>
            {" "}
            <Header logout={this.props.logout} />
            <Outlet />
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </>
    );
  }
}

export default ProtectedRoute;
