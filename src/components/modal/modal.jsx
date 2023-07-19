import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';import Spinner from 'react-bootstrap/Spinner';

function LoadingModal(props) {

    return (
      <>
        <Modal show="true" >
          <Modal.Header>
            <Modal.Title>
                Loading {props.dataTag}
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            It could take a few minutes...            
            </Modal.Body>          
        </Modal>
      </>
    );
}

export default LoadingModal