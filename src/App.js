import React, { useState, useEffect, Fragment } from 'react'
import Detail from './Detail'
import NavigationBar from './NavigationBar'
import {
	Switch,
	Route,
	NavLink,
	useParams,
	useRouteMatch
} from 'react-router-dom'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Home } from './Home'
import { About } from './About'
import { News } from './News'

var contentful = require('contentful')

function App() {
	const [data, setData] = useState([])
	useEffect(() => {
		//Initialising the client
		var client = contentful.createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY
		})
		//Instead of using fetch; is incorporated in contenful
		client.getEntries().then(function(entries) {
			setData(entries.items)
			console.log(entries.items)
		})
	}, [])

	return (
		<div className='App'>
			<Container style={{ backgroundColor: '#bedbbb' }}>
				<NavigationBar data={data}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/news' component={News} />
					</Switch>
				</NavigationBar>

				<nav>
					{data.map((e) => (
						<NavLink to={e.sys.id}>{e.fields.title}</NavLink>
					))}
				</nav>

				<Switch>
					<Route exact path='/'>
						<Carousel>
							{data.map((e) => (
								<Carousel.Item interval={3000}>
									<img
										height='500'
										className='d-block w-100'
										src={`http:${e.fields.image.fields.file.url}`}
										alt={`Picture of ${e.fields.title}`}
									/>
									<Carousel.Caption>
										<h3>{e.fields.title}</h3>
									</Carousel.Caption>
								</Carousel.Item>
							))}
						</Carousel>
					</Route>
					<Route path='/:id'>
						<Detail data={data} />
					</Route>
				</Switch>
			</Container>
		</div>
	)
}

export default App
