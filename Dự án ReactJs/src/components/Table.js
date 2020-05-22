import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Modal, Button} from 'react-bootstrap';

class Table extends Component 
{
		

	render() 
	{
		return(
			<div>
				<Modal show={this.state.showModal} onHide={this.close}>
				    <Modal.Header closeButton>
				        <Modal.Title>Modal heading</Modal.Title>
				    </Modal.Header>
				    <Modal.Body>
				       Modal body
				    </Modal.Body>
				    <Modal.Footer>
				        <Button onClick={this.close}>Close</Button>
				    </Modal.Footer>
				</Modal>
			</div>
		);
	}
}
export default Table;