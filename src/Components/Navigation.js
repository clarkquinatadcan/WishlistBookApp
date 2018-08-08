import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {

        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-absolute fixed-top sticky-top">
                <Link to="/" className="navbar-brand text-white">BookApp </Link>

                <Link to="/wishlist" className="text-white">WishList</Link>
            </nav>
        );

}

export default Navigation;