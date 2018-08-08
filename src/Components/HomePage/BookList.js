import React from 'react'
import BookItem from './BookItem'
import { Link } from 'react-router-dom'


const BookList = ({Books, handleClick}) => {

        // console.log(Books)
        // console.log(Load)
        // console.log(handleClick)

        return(
            <div className="container py-5">
                <h3 className="text-center">Available Books</h3>
                <div className="row justify-content-left">
                    <div className="col-sm-12 py-3">
                        <ul className="list-group flex-row flex-wrap justify-content-center">
                            {
                                Books
                                    ?  Books.map((book) => (
                                            <BookItem 
                                                bookitem={book} 
                                                key={book.ID} 
                                                handleClick={handleClick}
                                            />
                                        ))
                                    : <div>No result found.</div>
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
}

export default BookList