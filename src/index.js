import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../public/css/index.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './Components/containers/App'


class Root extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Root />,document.getElementById('app'))