import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';
import Resourcescss from '../css/Resources.css';
import Table from 'react-bootstrap/Table';
import DataProduct from '../components/DataProduct.json';



class Product extends Component 
{
	render() 
	{
		return(
			<div className='Bbody'>
				<div className='body'>
					<h2>Product</h2>
					<br/>

					<Card style={{ width: '73rem' }}>
						  <Card.Body>
						    <Card.Title className='RCtitle'><h5>Data Tables Example</h5></Card.Title>
						    	  <Button className="primary">Add Product</Button>
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
								      <th>Price</th>
								      <th>Curent Number</th>
								      <th>Quantity Sold</th>
								      <th>Revenue</th>
								      <th>Other</th>
								       <th>Update/Report is all/Delete</th>
								    </tr>
								  </thead>
								  <tbody>
									{/*table 1*/}
									{
										DataProduct.map((value,key) => 
											 <tr>
										      <td>{value.name}</td>
										      <td>{value.price}</td>
										      <td>{value.curentNumber}</td>
										      <td>{value.quantitySold}</td>
										      <td>{value.revenue}</td>
										      <td>{value.other}</td>
										      <td><span className='Sinfo'>Update</span> <span className='Supdate'>Report</span> <span className='Sdelete'>Delete</span></td>								      
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
export default Product;