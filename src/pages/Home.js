import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "../components/Header";
import PlaceToVisit from "../components/PlaceToVisit";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url('../public/assets/bg.jpg'})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}

// Listen for tab item click
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

export default Home;
