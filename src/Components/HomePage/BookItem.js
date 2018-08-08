import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({bookitem, handleClick}) => {

        return(
            <li className="list-group-item" onClick={() => handleClick(bookitem)} >
                <Link to={`/details/${bookitem.ID}`}>
                    <div className="singgle-bookitem text-center">
                        <div className="bookitem-title">
                            <h5>{bookitem.Title}</h5>
                        </div>
                        <div className="bookitem-img">
                            <img src={bookitem.Image} />
                        </div>
                    </div>
                </Link>
            </li>
        );
}

export default BookItem;