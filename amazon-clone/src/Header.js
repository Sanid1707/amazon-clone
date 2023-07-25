// all the code in the header component is going to be rendered in the header component

import React from "react";
import "./Header.css";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Seach</span>
          import SavedSearchIcon from '@mui/icons-material/SavedSearch';
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
