import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card,Col,Row } from 'react-bootstrap';
import Resourcescss from '../css/Resources.css';
import Table from 'react-bootstrap/Table';
import DataPersonnel from '../components/DataPersonnel.json';



class Personnel extends Component 
{
	render() 
	{
		return(
			<div className='Bbody'>
				<div className='body'>
					<h2>Setting</h2>
					<br/>

					<Row noGutters={ true } >
						<Col sm={ 4 }>
							<Card style={{ width: '23rem' }}>
						  <Card.Body>
						    <Card.Title className='RCtitle'><h5>Setting Component: </h5></Card.Title>
						     <hr/>
						    <Card.Text>	
						    <h6>Font Size: </h6>
								<select className='fontSize'>
									<option>Font Size 14</option>
									<option selected>Font Size 16</option>
									<option>Font Size 18</option>
									<option>Font Size 20</option>
								</select>

								<hr />
								<h6>Font: </h6>
								<select className='fontSize'>
									<option>Font 1</option>
									<option selected>Font 2</option>
									<option>Font 3</option>
									<option>Font 4</option>
								</select>

								<hr />
								<h6>Backgound Color: </h6>
								<select className='fontSize'>
									<option>Color: Blue</option>
									<option selected>Color: Gray</option>
									<option>Color: Red</option>
									<option>Color: Pink</option>
								</select>

						    </Card.Text>	   
						  </Card.Body>
						</Card>		
						</Col>

					{/*setting 2*/}
						<Col sm={ 4 }>
								<Card style={{ width: '23rem' }}>
							  <Card.Body>
							    <Card.Title className='RCtitle'><h5>Setting Menu: </h5></Card.Title>
							     <hr/>
							    <Card.Text>	
							    <h6>Font Size: </h6>
									<select className='fontSize'>
										<option>Font Size 14</option>
										<option selected>Font Size 16</option>
										<option>Font Size 18</option>
										<option>Font Size 20</option>
									</select>

									<hr />
									<h6>Color: </h6>
									<select className='fontSize'>
										<option selected>Color: Blue</option>
										<option>Color: Pink</option>
										<option>Color: Red</option>
										<option>Color: Gray</option>
									</select>

									<hr />
									<h6>Backgound Color: </h6>
									<select className='fontSize'>
										<option>Color: Blue</option>
										<option selected>Color: Violet</option>
										<option>Color: Red</option>
										<option>Color: Pink</option>
									</select>

							    </Card.Text>	   
							  </Card.Body>
							</Card>		
							</Col>

					{/*setting 3*/}
						<Col sm={ 4 }>
							<Card style={{ width: '23rem' }}>
						  <Card.Body>
						    <Card.Title className='RCtitle'><h5>Setting Ebook: </h5></Card.Title>
						     <hr/>
						    <Card.Text>	
						    <h6>Font Size: </h6>
								<select className='fontSize'>
									<option>Font Size 14</option>
									<option selected>Font Size 16</option>
									<option>Font Size 18</option>
									<option>Font Size 20</option>
								</select>

								<hr />
								<h6>Font: </h6>
								<select className='fontSize'>
									<option>Font 1</option>
									<option selected>Font 2</option>
									<option>Font 3</option>
									<option>Font 4</option>
								</select>

								<hr />
								<h6>Backgound Color: </h6>
								<select className='fontSize'>
									<option>Color: Blue</option>
									<option selected>Color: White</option>
									<option>Color: Red</option>
									<option>Color: Pink</option>
								</select>

						    </Card.Text>	   
						  </Card.Body>
						</Card>		
						</Col>
					</Row>

				</div>
			</div>
		);
	}
}
export default Personnel;