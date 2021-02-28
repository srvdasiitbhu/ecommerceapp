import React from "react";
import {
  Collapse,
  IconButton,
  List,
  ListItem
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import "./ExpandedFilters.css";
import "../LeftNav/LeftNav.css";

const ExpandedFilters = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List className="expand">
        <ListItem button onClick={handleClick}>
          <span className="collapsedfilters" style={{ paddingRight: 147 }}>
            Expanded Filters
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
      <Collapse in={open} timeout="auto" unmountOnExit className="expand">
        <form style={{ paddingLeft: 20 }}>
          <label>
            <input name="Recommended" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Recommended
            </span>
          </label>
          <br />
          <label>
            <input name="Recently Added" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Recently Added
            </span>
          </label>
          <br />
          <label>
            <input name="Expiring Soon" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Expiring Soon
            </span>
          </label>
          <br />
          <label>
            <input name="Most Rated" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Most Rated
            </span>
          </label>
          <br />
          <label>
            <input name="Price: Low -{'>'} High" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Price: Low -{">"} High
            </span>
          </label>
          <br />
          <label>
            <input name="Price: High -{'>'} Low" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              Price: High -{">"} Low
            </span>
          </label>
          <br />
        </form>
      </Collapse>
    </div>
  );
};

export default React.memo(ExpandedFilters);
