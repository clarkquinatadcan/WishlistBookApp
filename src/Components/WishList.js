import React from 'react'

const WishList = ({wishLists}) => {
    console.log(wishLists)
    return(
        <div className="wishlist"><br/><br/><br/>
            <h1>WishLisst</h1>

            {
                wishLists.length > 0
                        ?   wishLists.map(wishlist => (
                                <h1 key={wishlist.ID}>
                                    {wishlist.Title}
                                    <img src={wishlist.Image} />
                                </h1>
                            ))
                        :   <div>No Wishlist Found</div>
            }
        </div>
    )
}

export default WishList