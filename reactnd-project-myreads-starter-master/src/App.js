import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Head from './Head'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Content from './Content'
import OpenSearch from './openSearch'
import { Route } from 'react-router-dom'


//const books = 

class BooksApp extends React.Component {
  state = {
    current: [],
    want: [],
    read: []
  }
  getAllbooks = ()=>{
    BooksAPI.getAll().then((books) => {
      this.setState({current:books.filter((book)=>book.shelf==='currentlyReading')});
      this.setState({want:books.filter((book)=>book.shelf==='wantToRead')});
      this.setState({read:books.filter((book)=>book.shelf==='read')});
    }) 
  }
  updateBooks=(book,shelf) => {
    BooksAPI.update(book,shelf).then(() => {
        this.getAllbooks();
      });
  }
  componentDidMount() {
    this.getAllbooks();  
  }
  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => ( <Search update={this.updateBooks} books={this.state} />)} />
          <Route exact path="/" render={()=>(
            <div className="list-books">
              <Head />
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <Content books={this.state.current} update={this.updateBooks}/>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <Content books={this.state.want} update={this.updateBooks}/>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <Content books={this.state.read} update={this.updateBooks}/>
                    </div>
                  </div>
                </div>
              </div>
              <OpenSearch />
            </div>
          )}/>     
      </div>
    )
  }
}

export default BooksApp
