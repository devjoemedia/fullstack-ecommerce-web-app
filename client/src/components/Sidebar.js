import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
      <div className="sidebar">
        <ul>
          <li className="category">
            <p>
              {" "}
              <span>
                <i className="fas fa-desktop"></i>
              </span>
              Computers
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-desktop"></i>
              </span>
              Apple Computers{" "}
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-laptop"></i>
              </span>
              Laptops
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-keyboard"></i>
              </span>
              Friends
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-microchip"></i>
              </span>
              Computer Components
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-desktop"></i>
              </span>
              Accessories
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-mobile-alt"></i>
              </span>
              Cell Phones
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-desktop"></i>
              </span>
              TV Videos
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-gamepad"></i>
              </span>
              Game Consoles
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
          <li className="category">
            <p>
              <span>
                <i className="fas fa-desktop"></i>
              </span>
              Watches
            </p>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
        </ul>
        <div className="add">
          <h2>Look Up In The Sky</h2>
          <h4>Astronomy Or Astrology</h4>
        </div>
      </div>
  );
}

export default Sidebar;
