import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Button, Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </div>
      </Link>

      <div className="header__center">
        <Input
          disableUnderline={true}
          type="text"
          placeholder="Start Your Search"
        />

        <div className="header__searchDate">
          <div className="header__searchDateButton">
            <Button onClick={() => setShowSearch(!showSearch)}>
              {showSearch ? "Hide Date" : "Search Date"}
            </Button>
          </div>
        </div>
        <div className="header__searchCalender">{showSearch && <Search />}</div>
        <Input
          disableUnderline={true}
          min={0}
          type="number"
          placeholder="Number of guest"
        />
        <Button
          onClick={() => history.push("/search")}
          className="header__centerSearchIcon"
        >
          <SearchIcon />
        </Button>
      </div>

      <div className="header__right">
        <Button>Become a host</Button>
        <Button>
          <LanguageIcon />
          <ExpandMoreIcon />
        </Button>
        <Button className="header__rightAvatar">
          <MenuIcon />
          <Avatar />
        </Button>
      </div>
    </div>
  );
}

export default Header;
