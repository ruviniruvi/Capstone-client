/*import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import "./AddNewList.css"
const StarRating = () =>{
const [rating, setRating] =useState(null);
const [hover, setHover] = useState(null);
    return( 
        <div>
            {[...Array(10)].map((star,i) =>{
                const ratingValue =i +1;
                return (
                <label> 
                    <input type="radio" 
                    name="rating" 
                    value= {ratingValue}  
                    onclick = {() => setRating = (ratingValue)}
                    />
                    <FaStar 
                    className= "star" 
                    color= {ratingValue <= (hover ||rating) ? "#FFD700" : " #C2C2D6" }
                    size={20}
                    onMouseEnter = {() => setHover (ratingValue)}
                    onMouseLeave = {() => setHover (null)}
                    />  
                </label>   
                )
            })}
            <p> Your rating is {rating}.</p>
        </div>
    );
};
export default StarRating;
*/
