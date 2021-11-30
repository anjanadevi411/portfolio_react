import React from "react";
import "./nav.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  header: {
    flexGrow: 1,
    backgroundColor: "#DB7093",
    // clipPath: polygon(100% 0%, 100% 50%, 83% 27%, 0 100%, 0% 50%, 0 0)
    height: "8vh",
  },
  title: {
    flexGrow: 1,
  },
});

function Nav() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Portfolio
          </Typography>
          <Typography variant="h6" className={classes.title}>
            About Me
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Projects
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
