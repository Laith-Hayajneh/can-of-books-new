import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './component/Login';
import LogoutButton from './component/Logout';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/All-books" className="nav-link">All-books</Link></NavItem>
        <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link">About</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <LoginButton/>
        <LogoutButton />


      </Navbar>
    )
  }
}

export default Header;
