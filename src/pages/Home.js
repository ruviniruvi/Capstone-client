import React from "react";
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'


function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  return (
	<div className="App"> 

<link rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"> </link>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.1/css/font-awesome.min.css"></link>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>

<div id="slider" class="carousel slide carousel-fade" data-ride="carousel"></div>
  <div class="carousel-inner"></div>
    <div class="carousel-item active"></div>
      <img src="imagine1.jpg" class="d-block w-100" height="750" width="2050px" ></img>
    

    <div class="carousel-item"></div>
      <img src="imagine2.jpg" class="d-block w-100" height="750" width="2050px"></img>
    
    <div class="carousel-item"></div>
      <img src="imagine3.jpg" class="d-block w-100"  height="750" width="2050px"></img>
    
    <div class="carousel-item">  </div>
      <img src="imagine4.jpg" class="d-block w-100" height="750" width="2050px"></img>
  


</div>

    
  );
}
 
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


export default Home;
