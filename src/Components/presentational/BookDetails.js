import React from 'react'

const BookDetails = ({bookItemDetails, handleClickWishlist}) => {

    return(
        <div className="bookInfo">
            <div className="header"></div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-5 text-right book-img">
                        <img src={bookItemDetails.Image} />
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <h1 className="py-5 text-white">{bookItemDetails.Title}</h1>
                        <h4>{bookItemDetails.SubTitle}</h4>
                        <p>{bookItemDetails.Description}</p>
                        <p>ISBN: {bookItemDetails.isbn}</p>
                        <div className="row">
                            <div className="px-2">
                                <a className="btn btn-primary" href="http://it-ebooks.info/" target="_blank"> Download to Site </a>
                            </div>
                            <div className="px-2">
                                <a className="btn btn-info text-white" onClick={() => handleClickWishlist(bookItemDetails)} value="test">Add to WishList</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails