import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from '../presentational/Navigation'
import Home from '../presentational/Home';
import BookDetails from '../presentational/BookDetails'
import WishList from '../presentational/WishList'
import Err from '../presentational/Err'


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
			books: [],
			type: 'React',
			bookItem: '',
			wishlistItem: []
		};
	}


	handleSearch = (e) => {
		this.setState({
			type: e
		});
		this.getData(e)
	}
	
	getData = (e) => {
		const API_URL = "http://it-ebooks-api.info/v1/search/" + e
		fetch(API_URL)
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoading: false,
					books: json.Books,
				})
			})
	}

	componentDidMount = () => {
		this.setState({
			isLoading: true
		})
		setTimeout(() => {
			this.getData(this.state.type)
		},1000)
	}
	
	handleClickItem = (bookItem) => {
		this.setState({
			bookItem: bookItem
		})
	}

	handleClickWishlist = (wishlist) => {
		const found = this.state.wishlistItem.find((book) => {
				return book.ID === wishlist.ID
			})

		 if (found) {

			alert('The Item has already been added ')

		 } else {
				alert("New book Item added, Successfully")
				this.setState({
					wishlistItem: [...this.state.wishlistItem, wishlist]
				})
		 }
	}

	render(){
		const { isLoading, books } = this.state
		
		if (isLoading) {
			return (
				<div className="loader">
					<div className="icon">
						<img src="/public/img/book-loading.gif" />
					</div>
				</div>
			)
		}

		return(
			
				<div>
				
					<Navigation />

					<Switch>

						<Route 
							exact path='/'
							render={ () => {
								return (
									<Home
										//search banner component
										passTerm = {this.state.type} 
										passonChange = {this.handleSearch}

										//book list component
										Books = {books}
										handleClick = {this.handleClickItem}
									/>
								)
							}}
						/>
						
						<Route  
							path='/details/:ID' 
							render={ () => {
								return (
									<BookDetails 
										bookItemDetails = {this.state.bookItem}
										handleClickWishlist = {this.handleClickWishlist}
									/>
								)
							}}
						/>

						<Route 
							path='/wishlist'
							render={ () => {
								return (
									<WishList 
										wishLists = {this.state.wishlistItem}
									/>
								)
							}}
						/>

						<Route component={Err}/>
						
					</Switch>

				</div>

		);
	}
}

export default App