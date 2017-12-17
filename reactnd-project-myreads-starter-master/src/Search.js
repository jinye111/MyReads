import React,{ Component }from 'react'
import * as BooksAPI from './BooksAPI'
import Content from './Content'
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'

let allBooks
class Search extends Component{

	state = {
    		re: []
  	}

	searchBooks = (query)=>{
		console.log(query)
		BooksAPI.search(query).then((books)=>{this.setState({re:books})})
	}

	update = (book,shelf)=>{
		BooksAPI.update(book,shelf);
	}

	render(){
		console.log(this.state)
		return (
			<div className="search-books">
		        <div className="search-books-bar">
		          <Link to="/" className="close-search">Close</Link>
		          <div className="search-books-input-wrapper">
		            <input 
		            	type="text" 
		            	placeholder="Search by title or author"
		            	onChange={(event)=>this.searchBooks(event.target.value)}
		            />
		          </div>
		        </div>
		        <div className="search-books-results">
		 			<Content books={this.state.re} update={this.update}/>
		        </div>
          	</div>
		)

	}
	
}

export default Search