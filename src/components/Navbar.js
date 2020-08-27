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
                  <img src="https://png2.cleanpng.com/sh/507d81c088fc05468d71f6f336c95a91/L0KzQYm3WcI3N5D0kpH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgNkaZ1met5uLYboc8X2kr1oepJ1gNtscz3kgMHzifNifJp0ReZEbnB1Pcj5igN1NaR1hNt3dD3kfbPwhPV5fKN0jeU2coOwQoi7TgdzcaR5ReU2NXLkc4S4VPEzamQ9Sqc3NkG6RoqAVMIyPWQ9SKM6NEa5QYiATwBvbz==/kisspng-computer-icons-scalable-vector-graphics-applicatio-tynor-wrist-splint-ambidextrous-rs-274-wrist-s-5bac314a2b3825.617697421538011466177.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="navbar-right">
              {/* User Info & Cart Total */}
              <div className="user-info-container">
                <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp not found"/>
                <div className="username">John Doe</div>
              </div>
              <div className="cart-total-container">
                <img src="https://image.flaticon.com/icons/svg/600/600214.svg" alt="cartNotFound"/>
                <span>52</span>
              </div>
            </div>
        </div>
    )
  }
}

export default Navbar;
