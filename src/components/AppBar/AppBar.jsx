import React from "react";
import "./AppBar.css";
import { Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./Logo.png";
import User from "./User.png";

const AppBar = () => {
  return (
    <nav className="navbar navbar-light bg-white justify-content-between">
      <img src={Logo} />
      <form className="form-inline">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            style={{ width: 350 }}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search">
              <SearchIcon />
            </i>
          </span>
        </div>
        &nbsp;&nbsp;
        <Typography
          className="item-name"
          style={{ paddingRight: 70, paddingLeft: 50 }}
        >
          Consumer Electronics
        </Typography>
        <div>
          <button type="button" className="btn btn-outline-primary">
            <Typography className="sign-in">Sign in</Typography>
          </button>
          &nbsp; &nbsp;
          <button type="button" className="btn btn-outline-primary">
            <Typography className="sign-in">My cart</Typography>
          </button>
        </div>
      </form>
      <img src={User} />
    </nav>
  );
};

export default React.memo(AppBar);
