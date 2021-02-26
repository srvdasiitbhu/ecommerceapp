import React, { useEffect, useState } from "react"
import "./AppBar.css"
import { Button, Typography } from "@material-ui/core"
import Logo from "./Logo.png"

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
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
          &nbsp;&nbsp;
        </div>
        &nbsp;&nbsp;
        <Typography className="item-name">Consumer Electronics</Typography>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <button type="button" className="btn btn-outline-primary">
          <Typography>Sign in</Typography>
          </button>
          &nbsp; &nbsp;
          <button type="button" className="btn btn-outline-primary">
          <Typography>My cart</Typography>
          </button>
        </div>
        &nbsp;&nbsp;
      </form>
    </nav>
  );
};

export default React.memo(AppBar);
