import React,{ Component }from 'react'

class Select extends Component{

	render(){
		return (
			<div className="book-shelf-changer">
                <select onChange={(event)=>this.props.updatebooks(this.props.book,event.target.value)}>
	                <option value="none" disabled>Move to...</option>
	                {this.props.sel==="currentlyReading"?<option value="currentlyReading" selected>Currently Reading</option>:<option value="currentlyReading">Currently Reading</option>}
	                {this.props.sel==="wantToRead"?<option value="wantToRead" selected>Want to Read</option>:<option value="wantToRead">Want to Read</option>}
	                {this.props.sel==="read"?<option value="read" selected>Read</option>:<option value="read">Read</option>}
	                {this.props.sel===undefined?<option value="none" selected>None</option>:<option value="none">None</option>}
                </select>
            </div>
		)
	}
	
}

export default Select