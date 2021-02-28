import React from "react";
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { ExpandMore } from "@material-ui/icons";
import ExpandedFilters from "../ExpandedFilters/ExpandedFilters";
import YearFilter from "../YearFilter/YearFilter";
import "../ExpandedFilters/ExpandedFilters.css";
import "./LeftNav.css";

const LeftNav = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const handleClick7 = () => {
    setOpen7(!open7);
  };

  return (
    <div>
      <div class="btn-department">
        <button
          type="button"
          className="btn btn-outline-primary"
          style={{ paddingLeft: 60, paddingRight: 60 }}
        >
          <FilterListIcon />
          <Typography className="btn--department">Departments</Typography>
        </button>
      </div>
      <List>
        <ListItem button onClick={handleClick}>
          <span className="leftnav-categories collapsedfilters">
            All Categories
          </span>
          <IconButton
            size="small"
            aria-label="show more"
            style={{ transform: "rotate(270deg)" }}
          >
            <ExpandMore className="downarrow" />
          </IconButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick1}>
                <span className="leftnav-categories collapsedfilters">
                  Electronics
                </span>
                <IconButton
                  size="small"
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <div style={{ paddingLeft: 20 }}>
                  <ListItem button onClick={handleClick2}>
                    <span className="leftnav-categories collapsedfilters">
                      Cell Phones & Smartphones
                    </span>
                    <IconButton
                      size="small"
                      aria-label="show more"
                      style={{ transform: "rotate(270deg)" }}
                    >
                      <ExpandMore className="downarrow" />
                    </IconButton>
                  </ListItem>
                </div>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button>
                      <ListItemIcon />
                      <span className="leftnav-items">
                        Cell Phone Accessories
                      </span>
                    </ListItem>
                  </List>
                  <List component="div" disablePadding>
                    <ListItem button>
                      <ListItemIcon />
                      <span className="leftnav-items">Applications</span>
                    </ListItem>
                  </List>
                  <List component="div" disablePadding>
                    <ListItem button>
                      <ListItemIcon />
                      <span className="leftnav-items">Smart Watches</span>
                    </ListItem>
                  </List>
                  <List component="div" disablePadding>
                    <ListItem button>
                      <ListItemIcon />
                      <span className="leftnav-items">Cell Phone Gadgets</span>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Collapse>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick7}>
                <span className="leftnav-categories collapsedfilters">
                  Fashion & Style
                </span>
                <IconButton
                  size="small"
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
            <Collapse in={open7} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Women</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Men</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Watches</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Shoes</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Tapochki</span>
                </ListItem>
              </List>
            </Collapse>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick6}>
                <span className="leftnav-categories collapsedfilters">
                  Consumer Electronics
                </span>
                <IconButton
                  size="small"
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
            <Collapse in={open6} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Computers & Tablets</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Cameras & Photo</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">TV & Audio</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Smart Homes</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">
                    Cell Phones & Accessories
                  </span>
                </ListItem>
              </List>
            </Collapse>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick4}>
                <span className="leftnav-categories collapsedfilters">
                  Home & Garden
                </span>
                <IconButton
                  size="small"
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Yard, Garden & Outdoor</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Bubba Kush</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Crafts</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Home Improvement</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Pet Supplies</span>
                </ListItem>
              </List>
            </Collapse>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick5}>
                <span className="leftnav-categories collapsedfilters">
                  Collectibles
                </span>
                <IconButton
                  size="small"
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Coins & Paper Money</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Sports Memorabilla</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Postcards</span>
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon />
                  <span className="leftnav-items">Fantiki & Vkladish</span>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
      <List>
        <ListItem button onClick={handleClick3}>
          <span className="collapsedfilters" style={{ paddingRight: 150 }}>
            Collapsed Filters
          </span>
          <IconButton
            size="small"
            aria-label="show more"
            style={{ transform: "rotate(0deg)" }}
          >
            <ExpandMore className="downarrow" />
          </IconButton>
        </ListItem>
      </List>
      <Collapse in={open3} timeout="auto" unmountOnExit className="expand">
        &nbsp;<span>Colour</span>
        <br />
        <form style={{ paddingLeft: 20 }}>
          <label>
            <input name="Red" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Red
            </span>
          </label>
          <br />
          <label>
            <input name="Blue" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Blue
            </span>
          </label>
          <br />
          <label>
            <input name="Yellow" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Yellow
            </span>
          </label>
          <br />
          <label>
            <input name="Green" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Green
            </span>
          </label>
          <br />
          <label>
            <input name="Black" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Black
            </span>
          </label>
          <br />
          <label>
            <input name="White" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              White
            </span>
          </label>
          <br />
        </form>
      </Collapse>
      <br />
      <ExpandedFilters />
      <br />
      <YearFilter />
    </div>
  );
};

export default React.memo(LeftNav);
