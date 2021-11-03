import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (

        <div className="bg-dark">

            {/* contact banner */}
            <h1 className="contact-style"> Contact </h1>
            
            <h4 className="text-center text-info mt-4">CONTACT</h4>
            <h1 className="text-center text-white">Get In Touch</h1>
            <p  className="text-center text-white">Tourism lover is a government approved private company that is working to help people who come on tour.</p>

            
                 <div className="row container py-5">
                                            
                   <div className="col-sm-12 col-md-12 col-lg-6 ">
                       
                       <div className="row">
                          {/*  Denmark office Address part  */}

                     <div className="col-sm-12 col-md-6 col-lg-6 contact-us-background-style mt-4 py-3 pe-5 ps-4">
                            <h2 className=" text-light mb-3">Denmark Office</h2>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-phone-square-alt bg-info p-2 me-2"></i> +00947372890923 </p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle far fa-envelope bg-dark p-2 "></i> tourism.private1@gmail.com </p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-map-marked-alt bg-primary  p-2"></i> 213, Copenhegen , Denmark</p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-clock bg-warning me-2 p-2"></i> Working Hour- 24/7 </p>                            
                     </div>
               
               
                          {/*  Nepal Office Address part  */}

                        <div className="col-sm-12 col-md-6 col-lg-6 contact-us-background-style mt-4 py-3 pe-5 ps-4">
                                <h2 className=" text-light mb-3 text-center">Our Address</h2>
                                <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-phone-square-alt bg-info p-2 me-2"></i> +00947372890923 </p>
                                <p className="fs-6 text-white mt-2"> <i className="rounded-circle far fa-envelope bg-dark p-2 "></i> tourism.private1@gmail.com </p>
                                <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-map-marked-alt bg-primary  p-2"></i> 213, Copenhegen , Denmark</p>
                                <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-clock bg-warning me-2 p-2"></i> Working Hour- 24/7 </p>                            
                        </div>
                     </div>
                
                           
                           {/* social media icons */}
                           <div className="mt-5 contact-us-background-style">
                              <h3 className=" text-white mb-3 text-center">Social Media</h3>
                                <div className="text-center">
                                    <i className="rounded-circle  fab fa-facebook bg-info text-light fs-4  m-2 p-2"></i>
                                    <i className="rounded-circle  fab fa-instagram bg-dark text-white fs-4 rounded m-2 p-2"></i>
                                    <i className="rounded-circle  fab fa-whatsapp bg-light text-success fs-4 rounded m-2 p-2"></i>
                                    <i className="rounded-circle  fab fa-skype bg-primary text-white fs-4 rounded m-2 p-2"></i>
                                    <i className="rounded-circle  fab fa-twitter-square bg-info text-secondary fs-4 rounded m-2 p-2"></i> 
                                </div>                          
                           </div>

                     </div>


                     {/*  message us part */}
                     <div className="col-sm-12 col-md-12 col-lg-6 px-5 py-3 mt-4 contact-us-background-style ">
                            <h2 className="text-white mb-3 r">Message Us ..</h2>

                         {/*  message us form part */}
                           <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control placeholder="Enter Your Name" /> <br />
                                    <Form.Control placeholder="Enter Your Address" /> <br />
                                    <Form.Control placeholder="Enter Your Mobile Number" /> <br />
                                    <Form.Control  type="email" placeholder="Enter Your Email" /> <br />                                   
                                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                                            <Form.Control
                                            as="textarea"
                                            placeholder="White here your message."
                                            style={{ height: '100px' }}
                                            />
                                    </FloatingLabel>
                                </Form.Group>
                                <Button  variant="dark"> Message </Button>
                            </Form>

                     </div>                                                                 
            </div>
        </div>
    );
};

export default Contact;