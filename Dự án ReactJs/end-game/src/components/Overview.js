import React, { Component } from 'react';


import OverviewCss from '../css/Overview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList} from '@fortawesome/free-solid-svg-icons';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';

class Overview extends Component 
{
	render() 
	{
		return(
			<div className='Obody'>

			<div className='body'>
			<h2>Dashboard</h2>
			<br/>

			<Row className='Rcard ' noGutters={true}>
			{/*card 1*/}
				<Card style={{ width: '18rem' }}>
				<Card.Body className='card1'>
				<Card.Text>
					<span className='Tcard1'>Revenue last month</span>
					<h5>55 Mi</h5>
					<FontAwesomeIcon icon={ faCoins } className='iC'/>
				</Card.Text>
				</Card.Body>
				</Card>

			{/*card 2*/}
				<Card style={{ width: '18rem' }}>
				<Card.Body className='card2'>
				<Card.Text>
					<span className='Tcard2'>Turnover last week</span>
					<h5>20 Mi</h5>
					<FontAwesomeIcon icon={ faDollarSign } className='iC'/>
				</Card.Text>
				</Card.Body>
				</Card>

			{/*card 3*/}
				<Card style={{ width: '18rem' }}>
				<Card.Body className='card3'>
				<Card.Text>
					<span className='Tcard3'>Total bill</span>
					<h5>30 %</h5>
					<span className='TextC'>Targets</span>
					<FontAwesomeIcon icon={ faClipboardList } className='iC'/>
				</Card.Text>
				</Card.Body>
				</Card>

			{/*card 4*/}
				<Card style={{ width: '18rem' }}>
				<Card.Body className='card4'>
				<Card.Text>
					<span className='Tcard4'>Current Revenue</span>
					<h5>18 Mi</h5>
					<span className='TextC'>12 day - 30% Rest</span>
					<FontAwesomeIcon icon={ faPercentage } className='iC'/>
				</Card.Text>
				</Card.Body>
				</Card>

			</Row>

			</div>

			</div>
			);
	}
}
export default Overview;