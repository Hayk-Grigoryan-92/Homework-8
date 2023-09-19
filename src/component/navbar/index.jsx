import React from "react";
import "./style.scss";
import getap from "../../assets/images/getap.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <a>
            <img src="getap" alt="getap logo" />
          </a>
        </div>

        <div className="navbar">
            <ul>
                <li>Restaraunt</li>
                <li>Hotel</li>
                <li>Sauna</li>
                <li>Pool</li>
                <li>Boutiques</li>
                <li>About Us</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
