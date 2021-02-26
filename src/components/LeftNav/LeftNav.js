import React, { useEffect, useState } from "react";
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./LeftNav.css";

const LeftNav = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const toggleExpand = () => setExpanded(!expanded);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        <button type="button" className="btn btn-outline-primary">
          <FilterListIcon />
          <Typography className="btn--department">Departments</Typography>
        </button>
      </div>
      <List>
        <ListItem button onClick={handleClick}>
          <ArrowForwardIosIcon
            // className={clsx(classes.expand, expanded && classes.expandOpen)}
            className="leftnav-arrow"
            fontSize="small"
            aria-expanded={expanded}
            aria-label="show more"
          />
          <Typography className="leftnav-categories">All Categories</Typography>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={handleClick}>
              <ListItemIcon />
              <ArrowForwardIosIcon
                // className={clsx(classes.expand, expanded && classes.expandOpen)}
                className="leftnav-arrow"
                fontSize="small"
                aria-expanded={expanded}
                aria-label="show more"
              />
              <Typography>Electronics</Typography>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button onClick={handleClick}>
                  <ListItemIcon />
                  <ArrowForwardIosIcon
                    // className={clsx(classes.expand, expanded && classes.expandOpen)}
                    className="leftnav-arrow"
                    fontSize="small"
                    aria-expanded={expanded}
                    aria-label="show more"
                  />
                  <Typography>Electronics</Typography>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default React.memo(LeftNav);
