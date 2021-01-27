import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Background from "../assets/bg.jpg";
import '../App.css'

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        {/* <img src={Background} className="background-home-image"></img> */}
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span className={classes.colorText}>Girumi App</span>
          </h1>
          <Scroll to="Stuff to look" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },

  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },

  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));