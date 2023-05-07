import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class AllBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      description: '',
      img: '',
      name: '',
      status: '',
    }
  }

  //http://localhost:3001/books2?email=laithhayajneh98@gmail.com
  componentDidMount = async () => {
    const server = process.env.REACT_APP_SERVER;
    // let url = `${server}/books2?email=${this.props.auth0.user.email}`;
    let url = `${server}/allbook`;
    
    console.log('laith', this.props.auth0.user);
    let responseData = await axios.get(url);
    this.setState({
      books: responseData.data
    })
    console.log(this.state.books, 'books');
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <>
            <p>Book Carousel coming soon</p>
            {this.state.books.map((item, idx) => {
              return <>
                <div key={idx}>
                  {/* <p> {item.email}</p> */}
                  {item.books.map((book, idx2) => {
                    return <div style={{display:'inline-block'}}>
                      <Card style={{ width: '13rem',display:'inline-block' ,margin:'20px'}}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                          <Card.Title><p>{book.name}</p></Card.Title>
                          <Card.Text>
                            <p>{book.description}</p>
                          </Card.Text>
                          <Card.Text>
                            <p>{book.status}</p>
                          </Card.Text>
                          {/* <Button variant="outline-warning" onClick={() => this.updateModel(book._id)}>Update Book</Button> */}
                          {/* <UpdateFormModal show={this.state.showUpdateModal} updateBook={this.updateBook} closing={this.handleClose} book={this.state.book} /> */}

                          {/* <Button variant="outline-danger" onClick={() => this.deleteBook(book._id)}>Delete Book</Button> */}
                        </Card.Body>
                      </Card>
                      {/* <p>name :{book.name}</p> */}
                      {/* <p>description :{book.description}</p> */}
                    </div>
                  })}


                </div>
              </>



            })}
          </>




        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default withAuth0(AllBooks);
