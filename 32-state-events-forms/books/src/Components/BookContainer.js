import React, {Component} from 'react'
import books from '../data/data.js'
import BookCard from './BookCard'
import FormComponent from './FormComponent'

class BookContainer extends Component {
    state = {
        books: [...books],
        total: 0
    }
    

    renderBooks = () => {
        return this.state.books.map(book => <BookCard key={book.isbn} title={book.title} author={book.author} img={book.image} addToTotal={this.addToTotal} />)
    }

    addToTotal = () =>{
        // this.setState({...this.state, total: this.state.total+1})
        this.setState((prevState) => {
            return {
                total: prevState.total+1
            }
        })
    }

    handleAddToBooks = (book) => {
        this.setState((prevState) => {
            return{
                books: prevState.books.push(book)
            }
        })
    }

    render(){
        return (
            <div>
                <h1> JavaScript Books </h1>
                <h2>{this.state.total}</h2>
                <FormComponent handleAddToBooks={this.handleAddToBooks}/>
                {this.renderBooks()}
                
            </div>
        )

    }

}

export default BookContainer