import React from 'react'
import BookItem from './BookItem'


const BookList = ({Books, handleClick}) => {

        return(
            <div className="container py-5">
                <h3 className="text-center">Web Programming Books</h3>
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