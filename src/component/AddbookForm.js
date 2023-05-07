import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddbookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books
        }
    }


    addBookHandler = async (e) => {
        e.preventDefault();
        console.log(this.state.books, 'beforeee');

        const bookFormData = {
            bookname: e.target.bookName.value,
            bookDesc: e.target.description.value,
            bookStatus: e.target.bookStatus.value,

        };
        const server = process.env.REACT_APP_SERVER;
        // console.log(bookFormData);
        let newBookDaata = await axios.post(`${server}/books2?email=${this.props.auth0.user.email}`, bookFormData);
        this.setState({
            books: newBookDaata.data
        })
        console.log(this.state.books, 'after');

        // console.log(this.state.books,'boooks');
        // console.log(newBookDaata,'newbook data');


    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '24vh' }}>

                {/* <form onSubmit={(e) => this.addBookHandler(e)}>
                    <input placeholder='name of book' name='bookName' />
                    <input placeholder='dscriptions' name='description' />
                    <input placeholder='book status ' name='bookStatus' />
                    <input type='submit' value={'add book'} />
                </form> */}
            

                <Form onSubmit={(e) => this.addBookHandler(e)}>
                    <Form.Group controlId="formBookName">
                        {/* <Form.Label>Name of Book</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter name of book" name="bookName" />
                    </Form.Group>

                    <Form.Group controlId="formBookDesc">
                        {/* <Form.Label>Description</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter description" name="description" />
                    </Form.Group>

                    <Form.Group controlId="formBookStatus">
                        {/* <Form.Label>Book Status</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter book status" name="bookStatus" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add Book
                    </Button>
                </Form>

            </div>
        );
    }
}

export default withAuth0(AddbookForm);