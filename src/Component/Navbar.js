import { Component } from "react";
import { NavMenu } from "./NavMenu";
import "./NavbarStyle.css";

class Navbar extends Component {
  state = { clicked: false }; //for hamburger-menu
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    // extend your component using render
    return (
      <div>
        <nav className="NavbarItems">
          <h1 className="logo">TanviTech</h1>

          <div className="hamburger-menu" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {/* to active the hamburger button             */}
            {NavMenu.map((item, index) => {
              //mapping array from NavMenu.js
              return (
                //making li dynamic
                <li key={index}>
                  <a className={item.cName} href="/">
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              );
            })}
            <button className="signupBtn">Sign Up</button>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
