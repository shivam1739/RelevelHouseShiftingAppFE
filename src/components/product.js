import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="mainCont">
      <div className="header">
        <div className="city-selector">
          <input
            type="radio"
            id="whitnIn"
            name="fav_language"
            value="whitnIn"
          />
          <label for="whitnIn">WithIn City</label>
          <br />
          <input type="radio" id="Inter" name="fav_language" value="Inter" /> 
          <label for="Inter">Inter City</label>
          <br />
        </div>
        <div className="search">
          <div className="fil">
            <label>I ma shifting My</label>
            <select>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3+BHK">3+BHK</option>
            </select>
          </div>
          <div className="fil">
            <lable>Select City</lable>
            <select>
              <option value="Delhi">Delhi</option>
              <option value="Inodre">Indore</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Banglore">Banglore</option>
            </select>
          </div>
          <div className="fil">
            <lable>From </lable>
            <input
              type="text"
              placeholder="Select bulding or nearest location"
            />
          </div>
          <div className="fil">
            <lable>To </lable>
            <input
              type="text"
              placeholder="Select bulding or nearest location"
            />
          </div>
          <div
            style={{
              width: "auto",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div>
              <div className="date-box">
                <lable>On</lable>
                <input type="date" />
              </div>
              <div class="checkbox-container">
                <input type="checkbox" id="flexible-checkbox" />
                <label class="checkbox-label" for="flexible-checkbox">
                  Is Flexible
                </label>
              </div>
            </div>

            <button className="btnn"> Get free quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
