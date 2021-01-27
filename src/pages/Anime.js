import React, { Component } from "react";
import axios from "axios";
import { GET_POSTS } from "../utils/Queries";
import { useQuery } from "@apollo/client";
import Listings from "../components/Listings";

function Anime() {
  const { loading, error, data } = useQuery(GET_POSTS);
  // let data;
  // axios.get(`https://capstone-ttp1.herokuapp.com/listings`)
  // .then((res) => {
  //   console.log(res.data);
  //   data = res.data;
  //   console.log(data)
  // })
  let arr = []
  data.listings.map(list => {
    if(list.filter.name === "Anime"){
      arr.push(list)
    }
  })
  console.log(arr)
  return (
    <div className='anime'>
      <Listings lists={arr}/>
    </div>
  );
}

export default Anime;

// export default class Anime extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       filteredData: [],
//       current: [],
//       planning: [],
//       completed: [],
//     };
//   }
//   componentDidMount() {
//     axios.get(`https://capstone-ttp1.herokuapp.com/listings`)
//     .then((response) => {
//       this.setState({
//         data: response.data
//       })
//       console.log(this.state.data)
//     //      let filteredData = [...this.state.filteredData]
//     // this.state.data.map((list) => {
//     //   if (list.filter.filter_Name === "Anime") {
//     //     filteredData.push(list)
//     //   }
//     // });
//     // this.setState({filteredData}, 
//     //   () => {console.log(this.state.filteredData)})
//     });
 
//   }
//   render() {
//     console.log(this.state.data)
//     return(
//     <div className="anime">
//       {console.log(this.state.data)}
//       <Listings lists={this.state.data} />
//     </div>
//     )
//   }
// }
