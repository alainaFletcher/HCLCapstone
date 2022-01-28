import React, { Component } from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  NavImg,
} from "./HeaderElements";

class Header extends Component {
  render() {
    return (
      <>
        {/*Custom Nav button written using this video as a guide: https://www.youtube.com/watch?v=VzWBLj_CfpE*/}
        <Nav>
          <NavImg to="/">
            
          </NavImg>
          <h1 class="yall">  personal project management tool </h1>
          <Bars />
          <NavMenu>
            <NavLink to="/home" activestyle>
              Home
            </NavLink>
            <NavLink to="/dashboard" activestyle>
              Dashboard
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  }
}

export default Header;