import React from 'react'
import {
	Nav,
	Navbar,
	NavLink,
	Form,
	FormControl,
	DropdownButton,
	Dropdown
} from 'react-bootstrap'
import styled from 'styled-components'
const Styles = styled.div`
	.navbar {
		background-color: #3797a4;
	}
	a,
	.navbar-nav,
	.navbar-light .nav-link {
		color: #9fffcb;
		&:hover {
			color: white;
		}
	}
	.navbar-brand {
		font-size: 1.8em;
		color: #9fffcb;
		&:hover {
			color: white;
		}
	}
	.form-center {
		position: absolute !important;
		left: 25%;
		right: 25%;
	}
`
const NavigationBar = (props) => (
	<Styles>
		<Navbar expand='lg'>
			<Navbar.Brand href='/'>RECIPES</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Form className='form-center'>
				<FormControl type='text' placeholder='Search' className='' />
			</Form>
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Item>
						<Nav.Link href='/'>HOME</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href='/about'>ABOUT</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href='/news'>NEWS</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
			<DropdownButton id='dropdown-basic-button' title='Recipes'>
				{props.data.map((e) => (
					<Dropdown.Item>
						<NavLink to={e.sys.id}>{e.fields.title}</NavLink>
					</Dropdown.Item>
				))}
			</DropdownButton>
		</Navbar>
	</Styles>
)
export default NavigationBar
