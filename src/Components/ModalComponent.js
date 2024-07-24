import React, { useState } from 'react';
import { Button, Modal } from 'bootstrap-4-react';
import Funnel from './Funnel';

function ModalComponent({ isModalOpen, handleClose, handleOpen }) {
	return (
		<Modal id='exampleModal' fade show={isModalOpen} onHide={handleClose}>
			<Modal.Dialog centered>
				<Modal.Content>
					<Modal.Header>
						<Modal.Title>Get Your Free Quote!</Modal.Title>
						<Modal.Close>
							<span onClick={handleClose}>&times;</span>
						</Modal.Close>
					</Modal.Header>
					<Modal.Body>
						<Funnel />
					</Modal.Body>
					{/* <Modal.Footer>
						<Button secondary>Back</Button>
						<Button primary>Next</Button>
					</Modal.Footer> */}
				</Modal.Content>
			</Modal.Dialog>
		</Modal>
	);
}

export default ModalComponent;
