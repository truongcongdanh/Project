import React, { Component } from 'react';
import Menucss from '../css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faUsers} from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component 
{

	render() 
	{
		return(
			<div>
			
				<div className=' menuCol1'>					
					<div className='icon1'>
						<NavLink to="/"  exact={true}  className="selected" activeStyle={{ color: "black" }} >
							<FontAwesomeIcon icon={ faMountain } className='i1'/>
							<p>Overview</p>
						</NavLink>
					</div>

					<div className='icon2'>
						<NavLink to='/business' className="selected" activeStyle={{ color: "black" }} >
							<FontAwesomeIcon icon={ faShoppingCart } className='i2'/>
							<p>Business Management</p>
						</NavLink>
					</div>
					<hr/>

					<div className='icon2'>
					<span className='textMenu'>Bookinds Management</span> <br /> <br/>
						<NavLink to='/resources' className="selected" activeStyle={{ color: "black" }}>
							<FontAwesomeIcon icon={ faCoffee } className='i2'/>
							<p>Resources</p>
						</NavLink>
					</div>

					<div className='icon2'>
						<NavLink to="/product" className="selected" activeStyle={{ color: "black" }} >
							<FontAwesomeIcon icon={ faMugHot } className='i2'/>
							<p>Products</p>
						</NavLink>
					</div>
					<hr/>

					<div className='icon2'>
					<span className='textMenu'>Area Manager</span> <br/> <br/>
						<NavLink to="/managementArea" className="selected" activeStyle={{ color: "black" }} >
							<FontAwesomeIcon icon={ faCouch } className='i2'/>
							<p>Management Area&Table</p>
						</NavLink>
					</div>
					<hr />

					<div className='icon2'>
					<span className='textMenu'>HRM</span> <br/> <br/>
						<NavLink to="/personnel" className="selected" activeStyle={{ color: "black" }} >
							<FontAwesomeIcon icon={ faUsers } className='i2'/>
							<p>Personnel</p>
						</NavLink>
					</div>

					<div className='icon2'>
						<NavLink to="/profile" className="selected" activeStyle={{ color: "black" }} >
							<FontAwesomeIcon icon={ faIdCard } className='i2'/>
							<p>My Profile</p>
						</NavLink>
					</div>
					<hr />
					<div className='icon2'>
						<NavLink to="/setting" className="selected" activeStyle={{ color: "black" }} >
							<FontAwesomeIcon icon={ faCog } className='i2'/>
							<p>Setting</p>
						</NavLink>
					</div>
					<hr />

				</div>
			</div>			
			);
		}
	}
	export default Menu;