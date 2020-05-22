import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';
import Resourcescss from '../css/Resources.css';
import Table from 'react-bootstrap/Table';



class Resources extends Component 
{
	render() 
	{
		return(
			<div className='Bbody'>
				<div className='body'>
					<h2>Resources</h2>
					<br/>

					<Card style={{ width: '73rem' }}>
						  <Card.Body>
						    <Card.Title className='RCtitle'><h5>Data Tables Example</h5></Card.Title>
						    	  <Button className="primary">Add Resources</Button>
						     <hr/>
						    <Card.Text>					   
						      <h6>Show entries:</h6>
						      <input type='number' placeholder='10' className='Ishow'/>
						      <br/>
						      <br/>
						      <div className='searchR'>
						      	<h6>Search:</h6>
						      	<input type='text' placeholder='Search...' className='searchI'/>
						      </div>

						      <br />
						    <Table striped bordered hover>
								  <thead>
								    <tr>
								      <th>Name</th>
								      <th>Import Date</th>
								      <th>Importer</th>
								      <th>Total number of entries</th>
								      <th>Last Entered</th>
								       <th>Info/Update/Delete</th>
								    </tr>
								  </thead>
								  <tbody>
								{/*table 1*/}
								    <tr>
								      <td>Milk</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>12$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 2*/}
								    <tr>
								      <td>Coffee</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>15$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 3*/}
								    <tr>
								      <td>Sting</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>8$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 4*/}
								    <tr>
								      <td>Tea</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>13$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 5*/}
								    <tr>
								      <td>Red Bull</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>11$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 6*/}
								    <tr>
								      <td>Lemon</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>7$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>
								   	
								{/*table 7*/}
								    <tr>
								      <td>Peaches</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>8$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 8*/}
								    <tr>
								      <td>Ginger</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>9$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 9*/}
								    <tr>
								      <td>Orange</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>11$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								{/*table 10*/}
								    <tr>
								      <td>Coca</td>
								      <td>15/06/2019</td>
								      <td>Admin</td>
								      <td>9$</td>
								      <td>10/07/2019</td>
								      <td><span className='Sinfo'>Info</span> <span className='Supdate'>Update</span> <span className='Sdelete'>Delete</span></td>								      
								    </tr>

								   

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
export default Resources;