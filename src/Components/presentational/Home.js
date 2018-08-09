import React from 'react'
import SearchBanner from './HomePage/SearchBanner';
import BookList from './HomePage/BookList';

const Home = ({passTerm, passonChange,Books,handleClick}) => {

    return(
        <div>
            <SearchBanner 
                passTerm = {passTerm}
                passonChange = {passonChange}
            />
            <BookList 
                Books={Books}
                handleClick={handleClick}
            />
        </div>
    )
}

export default Home