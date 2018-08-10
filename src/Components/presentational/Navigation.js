import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = ({handleClickCount, addCount ,wishlistCount}) => {
        console.log(addCount)
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-absolute fixed-top sticky-top">
                <Link to="/" className="navbar-brand text-white mr-auto">BookApp </Link>

                <Link to="/wishlist" className="text-white">WishList {wishlistCount.length}</Link>
                {/* <button onClick={handleClickCount}>count</button> */}
            </nav>

        );

}

export default Navigation;