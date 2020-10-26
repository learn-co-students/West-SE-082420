import React from 'react'

class BookCard extends React.Component {
    render(){
        return(
           <div>
               <h2> title: {this.props.title}</h2>
               <h2> author: {this.props.author}</h2>

            </div> 
        )
    }
}

export default BookCard