import React , { Component} from 'react';
import "./AddNewList.css";
class AddNewList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      title: '',
      description: '',
      images: '',
      filter: '',
      rating:''
		
		}
	}

	handleTitleChange = event => {
		this.setState({
			title: event.target.value
		})
	}

	handleDescriptionChange = event => {
		this.setState({
			description: event.target.value
		})
	}



	handleImageChange = event => {
		this.setState({
			images: event.target.value
		})
	}

	handleFilterChange = event => {
		this.setState({
			filter: event.target.value
		})
  }
  
	handleRatingChange = event => {
		this.setState({
			rating: event.target.value
		})
  }



	handleSubmit = event => {
		alert(`${this.state.title} ${this.state.description} ${this.state.images}  ${this.state.filter}   ${this.state.rating}`)
		event.preventDefault()
	}

	render() {
		const { title, description, images, filter, rating } = this.state
		return (

      <div className="wrapper">
      <div className="form-wrapper">

      <h1>Add New Favorite Anime , Book , Game or Movie To Your List!</h1>

			<form onSubmit={this.handleSubmit}>
				<div className="title">
					<label>Title </label>
					<input
						type="text"
						value={title}
						onChange={this.handleTitleChange}
					/>
				</div>
        <div>
					<label>Description </label>
					<input
						type="text"
						value={description}
						onChange={this.handleDescriptionChange}
					/>
				</div>

        <div>
					<label>Image </label>
					<input
						type="text"
						value={images}
						onChange={this.handleImageChange}
					/>
				</div>

        <div>
					<label>Filter</label>
					<select value={filter} onChange={this.handleFilterChange}>
						<option value="anime">Anime</option>
						<option value="books">Books</option>
						<option value="games">Games</option>
            <option value="movies">Movies</option>

					</select>
				</div>

        <div>
					<label>Rating</label>
					<select value={rating} onChange={this.handleRatingChange}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

					</select>
				</div>			
			
				<button type="submit">Submit</button>
			</form>
      
      </div>
      </div>
    )
	}
}









export default AddNewList;