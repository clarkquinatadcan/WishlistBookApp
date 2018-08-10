import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = ({handleClickCount}) => {
        // console.log(handleClickCount)
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-absolute fixed-top sticky-top">
                <Link to="/" className="navbar-brand text-white mr-auto">BookApp </Link>

                <Link to="/wishlist" className="text-white">WishList {handleClickCount.length}</Link>
            </nav>
        );

}

export default Navigation;