import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
export default class MyModal extends Component {
    /**
     * 
     */
    componentDidMount() {
       
    }

    /**
     * 
     */
    componentWillUnmount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.body}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            关闭
                        </Button>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            确定
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}
