import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import React from "react";
import * as yup from "yup";
import { ref } from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8),
  repassword: yup.string().oneOf([ref("password"), null]),
});

const navigate = useNavigate


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      repassword: "",
      myData: this.initialData,
      arraysErrors: {},
      isloadding: false,
    };
  }

  defults = {
    username: "",
    email: "",
    password: "",
    repassword: "",
  };

  initialData = {
    username: "ali",
    email: "alihassan@gmail.com",
    password: "ali123!@#",
    repassword: "ali123!@#", // Corrected repassword
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const myData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    this.setState({ isloadding: true });

    try {
      const res = axios.post("https://jsonplaceholder.typicode.com/todos", myData);
      if (res) {
        this.setState({ isloadding: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isloadding: false });
    }

    const { username, email, password, repassword } = this.state;

    // Check for empty fields
    if (!username || !email || !password || !repassword) {
      this.setState({
        arraysErrors: {
          username: !username ? "Username is required." : null,
          email: !email ? "Email is required." : null,
          password: !password ? "Password is required." : null,
          repassword: !repassword ? "Re-password is required." : null,
        },
      });
      return; // Prevent further execution
    }

    try {
      await schema.validate({
        username: username,
        email: email,
        password: password,
        repassword: repassword,
      });
      console.log("Validation successful");
      // Corrected setState usage
      this.setState({
        username: this.defults.username,
        email: this.defults.email,
        password: this.defults.password,
        repassword: this.defults.repassword,
        arraysErrors: {},

        // Clear errors
      });
    } catch (error) {
      console.log("Validation errors:", error.errors);
      this.setState({ arraysErrors: error.errors });
    }
  };
  handleInputs = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  randomValues = () => {
    this.setState((prevState) => ({
      username: prevState.myData.username,
      email: prevState.myData.email,
      password: prevState.myData.password,
      repassword: prevState.myData.password,
    }));
  };

  render() {
    const { username, password, email, repassword, arraysErrors } = this.state;
    return (
      <>
        <h2>Form Page</h2>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={this.handleInputs}
                value={username}
              />
              <p style={{ color: "red" }}>{arraysErrors.username}</p>
            </div>
            <br />
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={this.handleInputs}
                value={email}
              />
              <p style={{ color: "red" }}>{arraysErrors.email}</p>
            </div>
            <br />
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleInputs}
                value={password}
              />
              <p style={{ color: "red" }}>{arraysErrors.password}</p>
            </div>
            <br />
            <div>
              <label htmlFor="repassword">Re-password</label>
              <input
                type="password"
                id="repassword"
                onChange={this.handleInputs}
                value={repassword}
              />
              <p style={{ color: "red" }}>{arraysErrors.repassword}</p>
            </div>
            <br />
            <button type="submit">submit</button>
            <button type="button" onClick={this.randomValues}>
              random values
            </button>

            {this.state.isloadding ?()=>{navigate('/')}:""}
          </form>
        </Container>
      </>
    );
  }
}

export default Form;

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().min(8),
//   repassword: yup.string().oneOf([ref("password"), null]),
// });

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       repassword: "",
//       myData: {
//         name: "ALI",
//         email: "ALI@GMAIL.COM",
//         password: "ALI123#@!",
//       },
//       arrayErrors: {}, // Initialize arrayErrors as an object
//     };
//   }

//   defults = {
//     name: "",
//     email: "",
//     password: "",
//     repassword: "",
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password, repassword } = this.state;

//     // Check for empty fields
//     if (!name || !email || !password || !repassword) {
//       this.setState({
//         arrayErrors: {
//           name: !name ? "Name is required." : null,
//           email: !email ? "Email is required." : null,
//           password: !password ? "Password is required." : null,
//           repassword: !repassword ? "Re-password is required." : null,
//         },
//       });
//       return; // Prevent further execution
//     }

//     this.setState((prevState) => ({
//       myData: {
//         name: prevState.name,
//         email: prevState.email,
//         password: prevState.password,
//         repassword: prevState.repassword,
//       },
//       name: this.defults.name,
//       email: this.defults.email,
//       password: this.defults.password,
//       repassword: this.defults.repassword,
//       arrayErrors: {}, // Clear errors on submit
//     }));

//     console.log(this.state);

//     try {
//       await schema.validate(
//         {
//           name: this.state.name,
//           email: this.state.email,
//           password: this.state.password,
//           repassword: this.state.repassword,
//         },
//         { abortEarly: false }
//       );
//       console.log("Validation successful");
//       // Add your success logic here
//     } catch (error) {
//       console.log(error.errors);
//       this.setState({ arrayErrors: error.errors });
//     }
//   };

//   randomValues = () => {
//     this.setState((prevState) => ({
//       name: prevState.myData.name,
//       email: prevState.myData.email,
//       password: prevState.myData.password,
//       repassword: prevState.myData.password,
//     }));
//   };

//   handleChangeInput = (e) => {
//     const { value, id } = e.target;
//     this.setState({ [id]: value });
//   };

//   render() {
//     const { name, email, password, repassword, arrayErrors } = this.state;

//     return (
//       <>
//         <Header myPage="Form" />
//         <h2>Form Page</h2>
//         <Container>
//           <form onSubmit={this.handleSubmit}>
//             <div>
//               <label htmlFor="name">Username</label>
//               <input
//                 type="text"
//                 id="name"
//                 onChange={this.handleChangeInput}
//                 value={name}
//               />
//               {arrayErrors.name && (
//                 <p style={{ color: "red" }}>{arrayErrors.name}</p>
//               )}
//             </div>
//             <br />
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 onChange={this.handleChangeInput}
//                 value={email}
//               />
//               {arrayErrors.email && (
//                 <p style={{ color: "red" }}>{arrayErrors.email}</p>
//               )}
//             </div>
//             <br />
//             <div>
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={this.handleChangeInput}
//               />
//               {arrayErrors.password && (
//                 <p style={{ color: "red" }}>{arrayErrors.password}</p>
//               )}
//             </div>
//             <br />
//             <div>
//               <label htmlFor="repassword">Re-password</label>
//               <input
//                 type="password"
//                 id="repassword"
//                 value={repassword}
//                 onChange={this.handleChangeInput}
//               />
//               {arrayErrors.repassword && (
//                 <p style={{ color: "red" }}>{arrayErrors.repassword}</p>
//               )}
//             </div>
//             <br />
//             <button type="submit">submit</button>
//             <button type="button" onClick={this.randomValues}>
//               random values
//             </button>
//           </form>
//         </Container>
//         <Footer />
//       </>
//     );
//   }
// }

// export default Form;
