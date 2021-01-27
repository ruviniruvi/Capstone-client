import React from "react";
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'



function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  return (

    <div className="home">  
      <h1>USER</h1>
      {  console.log(data)}

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"></link>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.1/css/font-awesome.min.css"></link>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
	  
	  
	  <div class="carousel"></div>
  <button class="carousel__button previous" id="previous"></button>
  <div class="carousel__images"></div>
    <img src="imagine1.jpg"  height="550" width="400px" ></img>
    <img src="imagine2.jpg"  height="550" width="400px"></img>
    <img src="imagine3.jpg"  height="550" width="400px"></img>
    <img src="imagine4.jpg" height="550" width="400px"></img>


  <button class="carousel__button next" id="next"></button>


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
