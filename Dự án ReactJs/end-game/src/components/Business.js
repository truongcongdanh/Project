import React, { Component } from 'react';
import BusinessCss from '../css/Business.css';
import DataTable from '../components/DataTable.json';
import DataDrink from '../components/DataDrink.json';
import DataProduct from '../components/DataProduct.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Modal, Button, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import coffee from '../img/coffee.jpg';
import coffeeMilk from '../img/coffeeMilk.jpg';
import redBull from '../img/redBull.jpg';
import sting from '../img/sting.jpg';
import nuocChanh from '../img/nuocChanh.jpg';
import traGung from '../img/traGung.jpg';
import traSua from '../img/traSua.jpg';
import traDao from '../img/traDao.jpg';

class Business extends Component 
{
	constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
   this.close = this.close.bind(this);
   this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open(id) {
    this.setState({ showModal: true, tableId: id });
  }


 /*onClick chọn số lượng đồ uống*/
 numberDrink(i) {
 	var tt = prompt("nhập số lượng " +i ,"1");
 }

	render() 
	{
		return(
			<div className='Bbody'>
				<div className='body'>
					<h2>Business Management</h2>
					<br/>

					<Card style={{ width: '74rem' }}>
					  <Card.Body>
					    <Card.Title>OFF LINE</Card.Title>
					    <hr/>
					    <Card.Text>

					    <Row className='Rcard1' noGutters={true}>

					    {
					    	/*table*/
					    	DataTable.map((value,key) => 
					    		<Card style={{ width: '12rem' }} onClick={()=> this.open(value.id)} className='cardCon'>
								  <Card.Body>
								    <Card.Title><h3>{ value.name }</h3></Card.Title>
								    <Card.Text>
								    <hr/>
								      <h6>{ value.area }</h6>
								    </Card.Text>	   
								  </Card.Body>
								</Card>	
					    	)
					    } 				

						</Row>

					    </Card.Text>
					  </Card.Body>
					</Card>
					
					<br />

				{/*online*/}
					<Card style={{ width: '74rem' }}>
					  <Card.Body>
					    <Card.Title>ON LINE</Card.Title>
					    <hr/>
					    <Card.Text>

					    <Row className='Rcard1' noGutters={true}>
					{/*card con 2*/}					
					     <Card style={{ width: '12rem' }} onClick={this.open} className='cardCon'>
						  <Card.Body>
						    <Card.Title><h3>Table 9</h3></Card.Title>
						     <FontAwesomeIcon icon={ faClock }/> 15:51:37
						    <Card.Text>
						      <hr/>
						      <h6>Area 9 | User 2</h6>
						      <h6>Total: 39$</h6>
						    </Card.Text>	   
						  </Card.Body>
						</Card>
											     			
						</Row>
						

					    </Card.Text>
					  </Card.Body>
					</Card>

				</div>

			{/*Table Model*/}
			{
				DataTable.map((val,key) => {
					if(val.id === this.state.tableId){
						return(
							<Modal show={this.state.showModal} onHide={this.close} className='model' size="lg">
							    <Modal.Header closeButton className='modelHeader'>
							        <h6>{val.name} | <FontAwesomeIcon icon={ faClock }/> 00:00:00
							        <br />
							        {val.area} | User x </h6>
							    </Modal.Header>

							    <Modal.Body>
							    <Row noGutters={true} >
							    <Col sm={ 7 }>
							      <Table striped bordered hover>
									  <thead>
									    <tr>
									      <th>Order</th>
									      <th>Name</th>
									      <th>Amount</th>
									      <th>Price</th>
									      <th>Cancel</th>
									    </tr>
									  </thead>
									  <tbody>
									  {
									  	DataDrink.map((value,key) => 
									  		<tr>
										      <td>{value.id}</td>
										      <td>{value.name}</td>
										      <td>5</td>
										      <td>{value.price}</td>
										      <td><FontAwesomeIcon icon={ faRemoveFormat } className='cancel'/></td>
									    	</tr>
									  	)
									  }

									    <tr>	 
									      <td colSpan="2">Total:</td>
									      <td colSpan="3">52$</td>
									    </tr>

									  </tbody>
									</Table>

									 <hr/>
									 											 
									
									 <Row noGutters={true}>
									 <Col sm={6}>
									 	<span className='foTable form-control'>Transfer Table</span>
									 </Col>
									 <Col sm={6}>
									 	 <span className='foTable form-control'>Connecting Table</span>
									 </Col>
									 <Col sm={6}>
									 	 <span className='foTable form-control'>Split The Table</span>
									 </Col>
									 <Col sm={6}>
									 	  <span className='foTable form-control'>Pay</span>
									 </Col>
									 	
									 </Row>

									  </Col>

									 <Col sm= {5} className='pl-4'>  {/*pl là padding-left*/}
									 	
									 	<input type='text' placeholder='Search....' className='searchModel'/>
									 	<br />
									 	<br />
									 	
									 	<Row noGutters={true}>
									 		{
									 			DataProduct.map((value,key) => 
									 				<Button className='btnDrink' onClick={()=> this.numberDrink(value.name)}>
									 					{value.name}
									 				</Button>
									 			)
									 		}

									 	</Row>

									 </Col>

									
									 </Row>
							    </Modal.Body>

							    <Modal.Footer>
							        
							    </Modal.Footer>
							</Modal>
						);
					}
				})
			} 
				
				
			</div>
		);
	}
}
export default Business;