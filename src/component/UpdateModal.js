import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export class UpdateFormModal extends Component {
    render() {
        console.log('in modal',this.props);
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.closing}>
                    <Modal.Header closeButton onClick={this.props.closing}>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
    
                        <Form onSubmit={this.props.updateBook}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Book Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Name" name="bookName" defaultValue={this.props.book.name} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Book Description
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Description" name="description" defaultValue={this.props.book.description} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Book Status
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as='select' name="bookStatus" defaultValue={this.props.book.status}>
                                        <option value='FAVORITE'>{this.props.book.status}</option>
                                        <option value='FAVORITE'>FAVORITE</option>
                                        <option value='READ LATER'>READ LATER</option>
                                        <option value='MY BOOK'>MY BOOK</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Button variant="outline-primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closing}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateFormModal