import { Link } from "react-router-dom";
import "./header.css";
import React from "react";
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Logo</h1>
        <ul>
          <li>
            <Link
              to="/dashboard/home"
              className={this.props.myPage === "Home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/about"
              className={this.props.myPage === "Aboute" ? "active" : ""}
            >
              Aboute
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/counter"
              className={this.props.myPage === "" ? "active" : ""}
            >
              Counter
            </Link>
          </li>



          <li>
           <button onClick={this.props.logout}>logout</button>
          </li>
          {/* <li><Link to="/TestPage" className={this.props.myPage === 'TestPage' ? 'active' : ''}>TestPage</Link></li>
                    <li><Link to="/Form" className={this.props.myPage === 'Form' ? 'active' : ''}>Form</Link></li>
                    <li><Link to="/CounterPage" className={this.props.myPage === 'CounterPage' ? 'active' : ''}>CounterPage</Link></li>
                    <li><Link to="/Posts" className={this.props.myPage === 'Posts' ? 'active' : ''}>Posts</Link></li>

                    <li><Link to="/Concat">Concat</Link></li> */}
        </ul>
      </header>
    );
  }
}

export default Header;
