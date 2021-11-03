import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

 // footer part start 

const Footer = () => {
    return (


        <div>

              <div  className="py-5 bg-secondary "> 
                 <div className="row container ">
                         
                          {/* footer Our Address part  */}
                     <div className="col-sm-12 col-md-6 col-lg-3 background-style mt-4 py-3 px-4">
                            
                            <h3 className=" text-white mb-3 text-center">THE TOURISM LOVER</h3>
                            <p className="text-light">Tourism lover is a government approved private company that is working to help people who come on tour.</p>  
                           
                            {/* social media icons */}
                            <div>
                            <i className="rounded-circle fab fa-facebook bg-info text-light fs-4  m-1 p-2"></i>
                            <i className="rounded-circle fab fa-instagram bg-dark text-white fs-4 rounded m-1 p-2"></i>
                            <i className="rounded-circle fab fa-whatsapp bg-light text-success fs-4 rounded m-1 p-2"></i>
                            <i className="rounded-circle fab fa-skype bg-primary text-white fs-4 rounded m-1 p-2"></i>
                            <i className="rounded-circle fab fa-twitter-square bg-info text-secondary fs-4 rounded m-1 p-2"></i>                           
                            </div>
                     </div>


                     {/* footer Newsletter part */}
                     <div className="col-sm-12 col-md-6 col-lg-3 px-5 py-3 mt-4 background-style ">
                           
                               <h2 className="text-white mb-3 r">Newsletter</h2>                       
                           <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control  type="email" placeholder="Enter Your Email" /> <br />                                                                       
                                </Form.Group>
                                <Button  variant="dark"> Subscribe </Button>
                            </Form>
                     </div> 


                          {/* footer Our Address part  */}

                     <div className="col-sm-12 col-md-6 col-lg-3 background-style mt-4 py-3 pe-5 ps-4">
                            <h2 className=" text-light mb-3 text-center">Our Address</h2>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-phone-square-alt bg-info p-2 me-2"></i> +00947372890923 </p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle far fa-envelope bg-dark p-2 "></i> tourism.private1@gmail.com </p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-map-marked-alt bg-primary  p-2"></i> 213, Copenhegen , Denmark</p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-clock bg-warning me-2 p-2"></i> Working Hour- 24/7 </p>                            
                     </div>
               
               

                      {/* footer Quick Links part */}
                     <div className="col-sm-12 col-md-6 col-lg-3 ps-5 py-3 background-style mt-4 ">
                     <h2  className="text-light mb-3 text-center">Quick Links</h2>

                        <NavLink className="nav-link text-light fs-5" to="/home">Home</NavLink>             
                        {/*<NavLink className="nav-link text-light fs-5" to="/services">Service</NavLink>           */}
                        {/*<NavLink className="nav-link text-light fs-5" to="/gallery">Gallery</NavLink> */}
                        <NavLink className="nav-link text-light fs-5" to="/blogs">Blogs</NavLink>
                        <NavLink className="nav-link text-light fs-5" to="/about">About Us</NavLink>    
                        <NavLink className="nav-link text-light fs-5" to="/contact">Contact</NavLink>
                                
                     </div>
                     

                                     
                </div>
            </div>
            
            {/* footer copy right part */}
            <div className="bg-dark p-5">
                 <h4 className="text-white text-center">© 2021 TOURISM LOVER . All Rights Reserved</h4>
            </div>
        </div>
    
    );
};

export default Footer;

// footer part end