import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import * as yup from "yup";
import axios from "axios";
import { Navigate } from "react-router-dom";

// Validation schema
const schema = yup.object().shape({
  username: yup.string().required("Username is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      arraysErrors: {},
      isLoading: false,
      isLogin: false,
    };
  }

  handleInputs = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Basic required check
    if (!username || !password) {
      this.setState({
        arraysErrors: {
          username: !username ? "Username is required." : null,
          password: !password ? "Password is required." : null,
        },
      });
      return;
    }

    try {
      await schema.validate({ username, password }, { abortEarly: false });
      this.setState({ arraysErrors: {}, isLoading: true });

      // API call
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Save token and trigger login state
      if (response && response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        this.setState({ isLogin: true });
      
        if (this.props.onLogin) {
          this.props.onLogin(); // 🔥 Notify App to update auth state
        }
      } else {
        throw new Error("Token not found in response.");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        const errorObj = {};
        error.inner.forEach((err) => {
          errorObj[err.path] = err.message;
        });
        this.setState({ arraysErrors: errorObj });
      } else if (error.response?.status === 400) {
        this.setState({
          arraysErrors: {
            username: "Invalid credentials",
            password: "Please check your username and password.",
          },
        });
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { username, password, arraysErrors, isLoading, isLogin } = this.state;

    // Early return for redirect when logged in
    if (isLogin) {
      return <Navigate to="/dashboard/home" />;
    }

    return (
      <>
     
        <h2>Login</h2>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                onChange={this.handleInputs}
                value={username}
              />
              <p style={{ color: "red" }}>{arraysErrors.username}</p>
            </div>
            <br />
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                onChange={this.handleInputs}
                value={password}
              />
              <p style={{ color: "red" }}>{arraysErrors.password}</p>
            </div>
            <br />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Submit"}
            </button>
          </form>
        </Container>
      
      </>
    );
  }
}

export default Form;
