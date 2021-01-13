import React from "react";
import { Link } from "react-router-dom";
import { StateValue } from "./contextAPI/cartContext";
import "./Header.css";

export default function Header() {
  const { state } = StateValue();

  return (
    <div>
      <div className="container">
        <header className="main-header">
          <Link to="/">EASYBUY</Link>
          {/* <a href="/" className="logo">EASYBUY</a> */}
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>
          <div className="client-details">
            <Link to="/cart">
              <span>
                {" "}
                <i className="fas fa-shopping-cart"></i>
              </span>
              <span> {state.cartCount} Items</span>
            </Link>
            <div className="white-list">
              <span>
                <i className="far fa-heart"></i>
              </span>
              <span>Wish list</span>
            </div>
            <div className="profile">
              <span>
                <i className="far fa-user-circle"></i>
              </span>
              <span>Sign in</span>
            </div>
          </div>
        </header>
      </div>
      <div className="container">
        <header className="sub-header">
          <div>
            <span>
              <i className="fas fa-bars"></i>
            </span>
            <span>All Categories</span>
          </div>
          <nav>
            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Super Deals
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Featured Brands
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Best Sellings
                </a>
              </li>
            </ul>
          </nav>
          <div className="faq">
            <div>
              <select>
                <option value="Help">Help</option>
              </select>
            </div>
            <div>
              <select>
                <option value="USD">USD</option>
              </select>
            </div>
            <div>
              <select>
                <option value="Language">Language</option>
              </select>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
