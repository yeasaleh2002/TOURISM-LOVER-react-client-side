import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
//import useAuth from '../../../Hooks/useAuth';


const Header = () => {

       // useAuth import
   // const { user, handleSignOut } = useAuth();

    return (
    
   <div>

       <Navbar   collapseOnSelect expand="lg" bg="dark" variant="light">
  <Container>


      {/* navbar brand part */}
  <Navbar.Brand> 


      {/* navbar image part */}
  <img alt="" src="http://images.mini-ielts.com/images/1/18/tourism.jpg" width="55" height="55" className="header-img d-inline-block rounded-circle align-top"/>{' '} 
  <span className="fw-bold text-white fs-3 p-3"> TOURISM LOVER</span>
      </Navbar.Brand>


      {/* navbar route part */}
  <Navbar.Toggle className="bg-info" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="ms-auto">
       <NavLink className="nav-link text-light fs-5" to="/home">Home</NavLink>             
       <NavLink className="nav-link text-light fs-5" to="/services">Service</NavLink>
       <NavLink className="nav-link text-light fs-5" to="/gallery">Gallery</NavLink>   
       <NavLink className="nav-link text-light fs-5" to="/blogs">Blogs</NavLink>
       <NavLink className="nav-link text-light fs-5" to="/about">About Us</NavLink>    
       <NavLink className="nav-link text-light fs-5" to="/contact">Contact</NavLink>
       <NavLink className="nav-link text-light fs-5" to="/login">LogIn</NavLink>


    
    {/*  {
         user.displayName ?

         
         <button  className="fs-5 ms-2" onClick={handleSignOut}> <span className="fs-5 ms-2 pt-2">{user.displayName} </span> log out</button>

         :

         <NavLink className="nav-link fs-5" to="/login">LogIn</NavLink>


     }  */}


    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
   </div>
       
       
    );
}; 

export default Header;