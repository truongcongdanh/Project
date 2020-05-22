import React, { Component } from 'react';
import Menucss from '../css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


class Ebook extends Component 
{
	render() 
	{
		return(
			<div className="fixed-top ebok">
				<div className='head'>
				<h2 className='ebook'>EBOOK</h2>
				<input type='text' placeholder='Search for...' className='search'/>
				<button className='btnSearch'><FontAwesomeIcon icon={ faSearch } className='iSearch'/></button>
				</div>
				<small className='danh'>Email:truongcongdanh8473@gmail.com</small>
			</div>
		);
	}
}
export default Ebook;