import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card,Col,Row } from 'react-bootstrap';
import Resourcescss from '../css/Resources.css';
import Table from 'react-bootstrap/Table';
import DataManagementArea from '../components/ManagementArea.json';



class ManagementArea extends Component 
{
	render() 
	{
		return(
			<div className='Bbody'>
			<div className='body'>
			<h2>Management Area</h2>
			<br/>



			<Row noGutters={true} >
				{/*bảng 1*/}
				<Col sm={ 6 }>
					<Card style={{ width: '36.5rem' }}>
						<Card.Body>
							<Card.Title className='RCtitle'><h5>Edit Area</h5></Card.Title>
								<hr/>
									<Card.Text>					       
										<br />
											{/*table*/}
											<Table striped bordered hover>
												<thead>
													<tr>
													<th>Area</th>
													<th>Parent Area</th>
													<th>Data Created</th> 
													<th>Delete</th>
													</tr>
												</thead>
												<tbody>
													{/*table 1*/}
													{
														DataManagementArea.map((value,key) => 
															<tr>
															<td>{value.area}</td>
															<td>{value.parentArea}</td>
															<td>{value.dataCreated}</td>
															<td><span className='Sdelete'>Delete</span></td>								      
															</tr>	
															)
													}
												</tbody>
										</Table>
									</Card.Text>	   
						</Card.Body>
					</Card>	
				</Col>
				{/*bảng 2*/}
				<Col sm={ 3 }>
					<Card style={{ width: '18rem' }}>
					  <Card.Body>
					    <Card.Title className='editArea'>Edit Area</Card.Title>
					    <hr />
					    <Card.Text>
						     <h6>Area Edit</h6>
						     <select className="select">
							  <option value="volvo" selected>Chose Area</option>
							  <option value="saab">Chose Area 1</option>
							  <option value="vw">Chose Area 2</option>
							  <option value="audi">Chose Area 3</option>
							</select>
							<br />
							<br /> 

							<input type='text' placeholder='Enter New Name' className='select' />
							<hr />

							<h6>Area Parent</h6>
						     <select className="select">
							  <option value="volvo">Chose Area</option>
							  <option value="saab">Chose Area 1</option>
							  <option value="vw">Chose Area 2</option>
							  <option value="audi" selected>Chose Area 3</option>
							</select>
							<hr />

							<Button className="AddAre">Add Area</Button>


					    </Card.Text>
					  </Card.Body>
					</Card>
				</Col>

				{/*bảng 3*/}
				<Col sm={ 3 }>
					<Card style={{ width: '18rem' }}>
					  <Card.Body>
					    <Card.Title className='newArea'>New Area</Card.Title>
					    <hr />
					    <Card.Text>

							<input type='text' placeholder='Enter New Name' className='select' />
							<hr />

							<h6>Area Parent</h6>
						     <select className="select">
							  <option value="volvo">Chose Area</option>
							  <option value="saab">Chose Area 1</option>
							  <option value="vw">Chose Area 2</option>
							  <option value="audi" selected>Chose Area 3</option>
							</select>
							<hr />

							<Button className="AddAre" variant="warning">Add Area</Button>


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
export default ManagementArea;