import React,{ Component } from 'react'
import Select from './Select'

class Content extends Component{

	render(){
		if(this.props.books[0]!==undefined){
			console.log(this.props.books[0].imageLinks.thumbnail)
			console.log(this.props.books[0].authors[0])
		}
		return (
			
			<ol className="books-grid">
			{
				this.props.books.map((book)=>(
					<li key={book.id}>
						<div className="book">
	                        <div className="book-top">
	                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+book.imageLinks.thumbnail+'")' }}></div>
	                            <Select book={book} sel={book.shelf} updatebooks={this.props.update}/>
	                          </div>
	                          <div className="book-title">{book.title}</div>
	                          <div className="book-authors">{book.authors}</div>
	                        </div>
					</li>
				))
			}
			</ol>	
		)
			
	}
	
}

export default Content