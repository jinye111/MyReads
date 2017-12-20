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
		BooksAPI.search(query)
			.then((books)=>{
				console.log(this.props.books);
				books.forEach((book)=>{
					this.props.books.current.forEach((c)=>{
						if (book.title===c.title) {
							book.shelf=c.shelf;
						}
					})

					this.props.books.want.forEach((w)=>{
						if (book.title===w.title) {
							book.shelf=w.shelf;
						}
					})
					this.props.books.read.forEach((r)=>{
						if (book.title===r.title) {
							book.shelf=r.shelf;
						}
					})
				})
				this.setState({re:books})
			})
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
		 			<Content books={this.state.re} update={this.props.update}/>
		        </div>
          	</div>
		)

	}
	
}

export default Search