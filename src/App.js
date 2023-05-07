import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './component/Profile';
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import LoginButton from './component/Login';
import LogoutButton from './component/Logout';
import AllBooks from './component/AllBooks';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    let {isAuthenticated}=this.props.auth0
    return (
      <>
        <Router>
          <Header />
          <Routes>
            {isAuthenticated &&
            <Route exact path="/"element={<BestBooks />} ></Route>
            }
            
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/All-books" element={<AllBooks />}></Route>
          </Routes>
          <LoginButton />
          <LogoutButton />
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0 (App);
