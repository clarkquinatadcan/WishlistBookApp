import React from 'react'


const SearchBanner = ({passTerm, passonChange}) => {
        return(
            <div className="HomeSearch">
                <div className="container">
                    <h1 className="text-center text-white">Looking for a free Web Programming Books ?</h1>
                    <p className="text-center text-white py-2">BookApp is free web app that provides you the latest trend books tutorial. It's your chance to expand your knowledge in Programming</p>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                            <form>
                                <input 
                                    className="form-control" 
                                    placeholder="Search Books..." 
                                    value={passTerm} 
                                    onChange={(e) => passonChange(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default SearchBanner