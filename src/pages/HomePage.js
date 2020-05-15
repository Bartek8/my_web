import React, { useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap'
import CV from '../images/cv.jpg'

const HomePage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="circle">
                <i className="fas fa-circle circle__element circle__full"></i>
                <i className="far fa-circle circle__element circle__empty"></i>
            </div>
            <div className="welcome">
                <h1 className="text-uppercase welcome__text-1">Hello!</h1>
                <h1 className="welcome__text-2">I'm Bartek Waszak</h1>
                <p className="welcome__text-3">Welcome to my portfolio page</p>
            </div>
            {/* <button onClick={this.readMoreClick} className='text-uppercase btn btn--read-more'>read more</button>
            <button onClick={this.cvClick} className='text-uppercase btn btn--cv'>cv</button> */}

            <Button variant="outline-light" className='text-uppercase modal-button' onClick={handleShow}>
                Curriculum Vitae
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >Curriculum Vitae</Modal.Title>
                </Modal.Header>
                <Modal.Body><Image className="modal-image" src={CV} rounded /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </div>


    );
}


export default HomePage;
