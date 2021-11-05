import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';




const Header = () => {

       // useAuth import
    const { user, handleSignOut } = useAuth();



    return (
    
   <div>

       <Navbar   collapseOnSelect expand="lg" bg="dark" variant="dark">
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
    <Nav className="d-flex ms-auto align-items-center">
      <Nav.Link>
      <NavLink className="nav-link "   to="/home">Home</NavLink>
      </Nav.Link>
      <Nav.Link>
      <NavLink className="nav-link  " to="/services">Service</NavLink>
      </Nav.Link>
      <Nav.Link>
      <NavLink className="nav-link  " to="/gallery">Gallery</NavLink>
      </Nav.Link>
      <Nav.Link>
      <NavLink className="nav-link  " to="/blogs">Blogs</NavLink>
      </Nav.Link>
      <Nav.Link>
      <NavLink className="nav-link  " to="/about">About</NavLink>
      </Nav.Link>
      <Nav.Link>
      <NavLink className="nav-link  " to="/contact">Contact</NavLink>
      </Nav.Link>
                    
    
       {
         user.email ?     
         <>

         <Nav.Link>
         <NavLink className="nav-link " to="/myOrder">Order</NavLink>
         </Nav.Link>
         <Nav.Link>
         <NavLink className="nav-link " to="/addService">Add Service</NavLink>
         </Nav.Link>
         <Nav.Link>
         <NavLink className="nav-link " to="/manageAllOrder">Manage Order</NavLink>
         </Nav.Link>
         <Nav.Link>
         <button  className=" ms-2  btn-sm btn-info " onClick={handleSignOut}> log out</button>
         
        </Nav.Link>
        <Nav.Link active>
        <span>{user.displayName} </span>
        </Nav.Link>
        
         </>    
        
         :
         <NavLink className="nav-link  fs-6" to="/login">LogIn</NavLink>
     } 

 
    </Nav>
    
   </Navbar.Collapse>
  </Container>
 </Navbar>
   </div>
       
       
    );
}; 

export default Header;