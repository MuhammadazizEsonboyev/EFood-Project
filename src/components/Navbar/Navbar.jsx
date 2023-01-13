import React from 'react';
import "./style.css"
const icon = require("../../../src/img/EFood.png")
const search = require("../../img/Search.png")
const cart = require("../../img/cart.png")




export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-3" >
            {/* <img src={icon} alt="" /> */}Bobur malades
          </div>
          <div className="col-9">
            <ul className="list">
              <li className="active list_item">Home</li>
              <li className="list_item">Service</li>
              <li className="list_item">Top Sites</li>
              <li className="list_item">Contact</li>
              <div className="image_right">
                <img src={search} className="list_search" alt="" />
                <img src={cart} className="list_cart" alt="" />
              </div>
              <button className="btn_primary">Sign Up</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
