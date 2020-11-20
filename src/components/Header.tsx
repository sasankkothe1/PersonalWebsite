import React from "react";

import "../styles/Header.css";

const Header: React.FC = () => {
  return(
    <div className="cont-header">
      <div className="header-left">
        <h4>S</h4>
        <h4>a</h4>
        <h4>s</h4>
        <h4>a</h4>
        <h4>n</h4>
        <h4>k</h4>
      </div>
      <div className="header-middle">
        <h4>This is header middle</h4>
      </div>
      <div className="header-right">
        <h4>This is header right</h4>
      </div>
    </div>
  )
}

export default Header;