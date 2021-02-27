import React, { useEffect, useState } from "react";
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
import "./LeftNav.css";

const LeftNav = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const toggleExpand = () => setExpanded(!expanded);
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
            aria-expanded={expanded}
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
                  aria-expanded={expanded}
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
                  <ListItem button onClick={handleClick3}>
                    <span className="leftnav-categories collapsedfilters">
                      Cell Phones & Smartphones
                    </span>
                    <IconButton
                      size="small"
                      aria-expanded={expanded}
                      aria-label="show more"
                      style={{ transform: "rotate(270deg)" }}
                    >
                      <ExpandMore className="downarrow" />
                    </IconButton>
                  </ListItem>
                </div>
                <Collapse in={open3} timeout="auto" unmountOnExit>
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
              <ListItem button onClick={handleClick1}>
                <span className="leftnav-categories collapsedfilters">
                  Business & Industrial
                </span>
                <IconButton
                  size="small"
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick1}>
                <span className="leftnav-categories collapsedfilters">
                  Computers
                </span>
                <IconButton
                  size="small"
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick1}>
                <span className="leftnav-categories collapsedfilters">
                  Consumer Electronics
                </span>
                <IconButton
                  size="small"
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick1}>
                <span className="leftnav-categories collapsedfilters">
                  Home & Garden
                </span>
                <IconButton
                  size="small"
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
          </List>

          <List component="div" disablePadding>
            <div style={{ paddingLeft: 10 }}>
              <ListItem button onClick={handleClick1}>
                <span className="leftnav-categories collapsedfilters">
                  Collectibles
                </span>
                <IconButton
                  size="small"
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ transform: "rotate(270deg)" }}
                >
                  <ExpandMore className="downarrow" />
                </IconButton>
              </ListItem>
            </div>
          </List>
        </Collapse>
      </List>
      <List>
        <ListItem button>
          <span className="leftnav-categories collapsedfilters">
            Collapsed Filters
          </span>
          <IconButton
            size="small"
            aria-expanded={expanded}
            aria-label="show more"
            style={{ transform: "rotate(0deg)" }}
          >
            <ExpandMore className="downarrow" />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
};

export default React.memo(LeftNav);
