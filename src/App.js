import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import TestPage from "./pages/TestPage";
import CounterPage from "./pages/CounterPage";
import Form from "./pages/Form";
import Todo from "./pages/Todo";
import Comp from "./pages/Comp";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";

class App extends React.Component {
  state = {
    isAuth: false,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isAuth: true });
    }
  }

  logout = () => {
    this.setState({ isAuth: false })
    localStorage.removeItem('token')
  }

  onLogin = () => {
    this.setState({ isAuth: true })
  }
  render() {
    const { isAuth } = this.state;

    return (
      <>
        <Routes>
          {/* Redirect root to login */}
          <Route index element={<Navigate to="/login" />} />

          {/* Login Route */}
          <Route
            path="/login"
            element={
              isAuth ? (
                <Navigate to="/dashboard/home" />
              ) : (
                <Form onLogin={this.onLogin} />
              )
            }
          />

          {/* Protected Routes with Header/Footer */}
          <Route
            path="/dashboard"
            element={
              <>

                <ProtectedRoute isAuth={isAuth} logout={this.logout} />
              </>
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="about" element={<Aboute />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="todo" element={<Todo />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post/:id" element={<Post />} />
          </Route>

          <Route path="/comp" element={<Comp />} />

          {/* 404 Error Page */}
          <Route path="*" element={<h1>Error Page 404</h1>} />
        </Routes>
      </>
    );
  }
}

export default App;
