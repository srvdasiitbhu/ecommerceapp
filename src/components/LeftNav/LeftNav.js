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
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
    setOpen(!open3);
  };
  return (
    <div>
      <div class="btn-department">
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
            <ListItem button onClick={handleClick1}>
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
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button onClick={handleClick}>
                  <ListItemIcon />
                  <ListItemIcon />
                  <ArrowForwardIosIcon
                    // className={clsx(classes.expand, expanded && classes.expandOpen)}
                    className="leftnav-arrow"
                    fontSize="small"
                    aria-expanded={expanded}
                    aria-label="show more"
                  />
                  <Typography>Cell Phones & Smartphones</Typography>
                </ListItem>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button onClick={handleClick1}>
                  <ListItemIcon />
                  <ArrowForwardIosIcon
                    // className={clsx(classes.expand, expanded && classes.expandOpen)}
                    className="leftnav-arrow"
                    fontSize="small"
                    aria-expanded={expanded}
                    aria-label="show more"
                  />
                  <Typography>Business & Industrial</Typography>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button onClick={handleClick1}>
                      <ListItemIcon />
                      <ArrowForwardIosIcon
                        // className={clsx(classes.expand, expanded && classes.expandOpen)}
                        className="leftnav-arrow"
                        fontSize="small"
                        aria-expanded={expanded}
                        aria-label="show more"
                      />
                      <Typography>Computers</Typography>
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button onClick={handleClick1}>
                          <ListItemIcon />
                          <ArrowForwardIosIcon
                            // className={clsx(classes.expand, expanded && classes.expandOpen)}
                            className="leftnav-arrow"
                            fontSize="small"
                            aria-expanded={expanded}
                            aria-label="show more"
                          />
                          <Typography>Consumer Electronics</Typography>
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItem button onClick={handleClick1}>
                              <ListItemIcon />
                              <ArrowForwardIosIcon
                                // className={clsx(classes.expand, expanded && classes.expandOpen)}
                                className="leftnav-arrow"
                                fontSize="small"
                                aria-expanded={expanded}
                                aria-label="show more"
                              />
                              <Typography>Home & Garden</Typography>
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                <ListItem button onClick={handleClick1}>
                                  <ListItemIcon />
                                  <ArrowForwardIosIcon
                                    // className={clsx(classes.expand, expanded && classes.expandOpen)}
                                    className="leftnav-arrow"
                                    fontSize="small"
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                  />
                                  <Typography>Collectibles</Typography>
                                </ListItem>
                              </List>
                            </Collapse>
                          </List>
                        </Collapse>
                      </List>
                    </Collapse>
                  </List>
                </Collapse>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
      <List>
        <ListItem button onClick={handleClick}>
          <Typography className="leftnav-categories">
            Collapsed Filters
          </Typography>
          <IconButton aria-expanded={expanded} aria-label="show more" />
        </ListItem>
      </List>
    </div>
  );
};

export default React.memo(LeftNav);
