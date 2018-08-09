import React from 'react'

const WishList = ({wishLists}) => {
    console.log(wishLists)
    return(
        <div className="wishlist py-5">
            <div className="container py-5">
                <h1  className="text-center">Your WishList</h1>
                <ul className="d-flex justify-content-center align-items-end">
                    {
                        wishLists.length > 0
                                ?   wishLists.map(wishlist => (
                                        <li key={wishlist.ID}>
                                            <img src={wishlist.Image} />
                                        </li>
                                    ))
                                :   <div className="text-center py-5">
                                        <h4>No Wishlist Found!</h4>
                                    </div>
                    }
                </ul>
            </div>
        </div>
    )
}

export default WishList