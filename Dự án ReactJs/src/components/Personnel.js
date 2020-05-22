import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';
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
					<h2>Personnel</h2>
					<br/>

					<Card style={{ width: '73rem' }}>
						  <Card.Body>
						    <Card.Title className='RCtitle'><h5>List User</h5></Card.Title>
						    	  <Button className="primary">New User</Button>
						     <hr/>
						    <Card.Text>					   

						      <br />
						    <Table striped bordered hover>
								  <thead>
								    <tr>
								      <th>User</th>
								      <th>Name</th>
								      <th>Email</th>
								      <th>Role</th>
								      <th>Data of Participation</th>
								       <th>Info/Delete</th>
								    </tr>
								  </thead>
								  <tbody>
									{/*table 1*/}
									{
										DataPersonnel.map((value,key) => 
											 <tr>
										      <td>{value.user}</td>
										      <td>{value.name}</td>
										      <td>{value.email}</td>
										      <td>{value.role}</td>
										      <td>{value.DOP}</td>
										      <td><span className='Supdate'>Info</span> <span className='Sdelete'>Delete</span></td>								      
										    </tr>	
										)
									}
								  </tbody>
							</Table>

						    </Card.Text>	   
						  </Card.Body>
						</Card>		

				</div>
			</div>
		);
	}
}
export default Personnel;