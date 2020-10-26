import React from 'react'
import BookCard from './BookCard'

const BookContainer = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Book Container</h2>
            <p>{props.arr}</p>
            <p>{props.num}</p>
            <BookCard title="Eloquent JavaScript" author="Rose" />
            <BookCard title="Speaking JavaScript"  author="adam" />
            <BookCard title="Understanding ECMAScript 6" author="emiley" />
            <BookCard title="You Don't Know JS" author="ix" />
        </div>
    )
}

export default BookContainer