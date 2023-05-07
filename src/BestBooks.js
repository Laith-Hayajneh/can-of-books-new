import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/Button'
import AddbookForm from './component/AddbookForm';
import UpdateBook from './component/UpdateBook';
import UpdateFormModal from './component/UpdateModal';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      description: '',
      img: '',
      name: '',
      status: '',
      showModal: false,
      idBoookForUpdate: 0,
      oneBookData: {}
    }
  }

  //http://localhost:3001/books2?email=laithhayajneh98@gmail.com
  componentDidMount = async () => {
    // console.log('component');
    const server = process.env.REACT_APP_SERVER;
    let url = `${server}/books2?email=${this.props.auth0.user.email}`;
    // let url = `${server}/allbook`;

    // console.log('laith', this.props.auth0.user);
    let responseData = await axios.get(url);
    await this.setState({
      books: responseData.data
    })
    console.log(this.state.books, 'beforeee');

    // console.log(this.state.books, 'books');
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  /// add a new book 


  /// delete book
  deleteBook = async (id) => {
    console.log('delete book', id);
    try {
      console.log(this.state.books, 'beforeee');

      // const server=`${process.env.REACT_APP_SERVER}/delete/${id}?email=${this.props.auth0.user.email}`;

      let bookData = await axios.delete(`${process.env.REACT_APP_SERVER}/books2/${id}?email=${this.props.auth0.user.email}`)
      console.log(bookData.data.length, 'after deleteing');
      await this.setState({
        books: bookData
      });
      console.log(this.state.books, 'after');
    } catch (error) {
      console.log(error);

    }


  };
  hideUpdateModal = async () => {
    await this.setState({
      showModal: false
    })
  };
  showUpdateModal = async () => {
    await this.setState({
      showModal: false
    })
  }
  showUpdateBook = async (id) => {
    console.log(id, 'this id update');
    // console.log('updating', this.state.books[0].books[id].name);

    await this.setState({
      showModal: true,
      idBoookForUpdate: id,
      oneBookData:this.state.books[0].books.find(item=>item._id === id)

      // oneBookData: {
      //   description: this.state.books[0].books[id].description,
      //   img: this.state.books[0].books[id].img,
      //   name: this.state.books[0].books[id].name,
      //   status: this.state.books[0].books[id].status,
      // }
    });

    // console.log(this.state.oneBookData, 'ffffffffff');

  };

  //////////
  updateBook = async (e) => {
    e.preventDefault();
    // console.log(this.state.idBoookForUpdate, 'eeeeeeeee');

    console.log('in upppp');
    const server = process.env.REACT_APP_SERVER;
    let bookFormData = {
      bookname: e.target.bookName.value,
      bookDesc: e.target.description.value,
      bookStatus: e.target.bookStatus.value,
    }
    const bookId = this.state.idBoookForUpdate;

    let newBookDaata = await axios.put(`${server}/updateBook/${this.state.idBoookForUpdate}?email=${this.props.auth0.user.email}`, bookFormData);
    // console.log({newBookDaata});
    // console.log('book beforsssss',this.state.books);
    // Find the index of the updated book in the books array
    const updatedBookIndex = this.state.books.findIndex(book => book._id === bookId);
   await this.setState({
      books:newBookDaata.data
    })




  }



  render() {
    // console.log('class');
    // this.componentDidMount()

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <AddbookForm books={this.state.books}/>
        {/* {this.state.showUpdateBook && */}

        {/* <UpdateBook updateBookNew={this.updateBook} oldBokkData={this.state.oneBookData} /> */}
        {/* // } */}


        {this.state.books.length ? (
          <>
            <p>My books</p>
            {this.state.books.map((item, idx) => {
              return <>
                <div key={idx}>
                  {/* <p> {item.email}</p> */}
                  <CardDeck className="d-flex flex-wrap">
                  {item.books.map((book, idx2) => {
                    return <>

                      <Card key={idx2} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                          <Card.Title style={{ color: 'black' }}><p>{book.name}</p></Card.Title>
                          <Card.Text style={{ color: 'black' }}>
                            <span>{book.description}</span>
                          </Card.Text>
                          <Card.Text style={{ color: 'black' }}>
                            <span>{book.status}</span>
                          </Card.Text>
                          <Button variant="outline-danger" onClick={() => this.deleteBook(book._id)} >Delete Book</Button>
                          <Button variant="outline-danger" onClick={() => this.showUpdateBook(book._id)} >Update Book</Button>
                          <UpdateFormModal closing={this.hideUpdateModal} updateBook={this.updateBook} show={this.state.showModal} book={this.state.oneBookData} />


                          {/* <Button variant="outline-warning" onClick={() => this.updateModel(book._id)}>Update Book</Button> */}
                          {/* <UpdateFormModal show={this.state.showUpdateModal} updateBook={this.updateBook} closing={this.handleClose} book={this.state.book} /> */}

                          {/* <Button variant="outline-danger" onClick={() => this.deleteBook(book._id)}>Delete Book</Button> */}
                        </Card.Body>
                      </Card>
                      {/* <p>name :{book.name}</p> */}
                      {/* <p>description :{book.description}</p> */}
                    </>
                  })}
                  </CardDeck>


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

export default withAuth0(BestBooks);

