import React from "react";
import { Collapse, IconButton, List, ListItem } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import "../ExpandedFilters/ExpandedFilters.css";
import "../LeftNav/LeftNav.css";

const YearFilter = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List className="expand">
        <ListItem button onClick={handleClick}>
          <span className="collapsedfilters" style={{ paddingRight: 105 }}>
            Year of manufacturing
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
            <input name="1954" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1954
            </span>
          </label>
          <br />
          <label>
            <input name="1955" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1955
            </span>
          </label>
          <br />
          <label>
            <input name="1956" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1956
            </span>
          </label>
          <br />
          <label>
            <input name="1957" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1957
            </span>
          </label>
          <br />
          <label>
            <input name="1958" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1958
            </span>
          </label>
          <br />
          <label>
            <input name="1959" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1959
            </span>
          </label>
          <br />
          <label>
            <input name="1960" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1960
            </span>
          </label>
          <br />
          <label>
            <input name="1961" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1961
            </span>
          </label>
          <br />
          <label>
            <input name="1962-2020" type="checkbox" />
            <span className="filters" style={{ paddingLeft: 10 }}>
              1962-2020
            </span>
          </label>
          <br />
        </form>
      </Collapse>
    </div>
  );
};

export default React.memo(YearFilter);
