import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
      <div class="sidebar">
        <ul>
          <li class="category">
            <p>
              {" "}
              <span>
                <i class="fas fa-desktop"></i>
              </span>
              Computers
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-desktop"></i>
              </span>
              Apple Computers{" "}
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-laptop"></i>
              </span>
              Laptops
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-keyboard"></i>
              </span>
              Friends
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-microchip"></i>
              </span>
              Computer Components
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-desktop"></i>
              </span>
              Accessories
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-mobile-alt"></i>
              </span>
              Cell Phones
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-desktop"></i>
              </span>
              TV Videos
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-gamepad"></i>
              </span>
              Game Consoles
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
          <li class="category">
            <p>
              <span>
                <i class="fas fa-desktop"></i>
              </span>
              Watches
            </p>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
        </ul>
        <div class="add">
          <h2>Look Up In The Sky</h2>
          <h4>Astronomy Or Astrology</h4>
        </div>
      </div>
  );
}

export default Sidebar;
