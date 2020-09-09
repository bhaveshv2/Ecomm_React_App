import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
              {/* Company logo */}
              <div className="logo-container">
                <Link to="/" >
                  <img src="https://image.flaticon.com/icons/svg/777/777205.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="navbar-right">
              {/* User Info & Cart Total */}
              <div className="user-info-container">
                <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp not found"/>
                <div className="username">John Doe</div>
              </div>
              <Link to="/cart" className="cart-total-container">
                <img src="https://image.flaticon.com/icons/svg/600/600214.svg" alt="Not Found"/>
                <span>{this.props.cartLength}</span>
              </Link>
            </div>
        </div>
    )
  }
}

export default Navbar;
