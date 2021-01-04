import React from "react";
import "./Trending.css";

function Trending() {
  return (
    // <!-- Trending items -->
    <div className="trendings">
      <div className="container">
        <div className="trending-inner">
          <div className="trending-item item-1">
            <h2>Astronomy Or Astrology</h2>
            <p>start Sales</p>
            <img src="./img/item-4.png" alt="Head-Phone" />
          </div>
          <div className="trending-item item-2">
            <h2>
              The basic of buying
              <br />a Telescope
            </h2>
            <p>Astronomy Or Astrology</p>
          </div>
          <div className="trending-item item-3">
            <div>
              <img src="./img/item-4.png" alt="Watch/pen" />
              <p>
                getting free publicity
                <br />
                for Your Bussiness
              </p>
            </div>
            <div>
              <img src="./img/item-2.png" alt="Watch/pen" />
              <p>
                getting free publicity
                <br />
                for Your Bussiness
              </p>
            </div>
            <div>
              <img src="./img/item-5.png" alt="Watch/pen" />
              <p>
                how plasma tvs and <br />
                lcd tvs differ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
