import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="bg-dark">
            
            <h1 className="about-style"> About </h1>
           <div className="container">
               
           <div className="row  mt-5">
               <div className="col-sm-12 col-md-12 col-lg-6 text-light pe-5">
                    <h5 className="text-info mb-5 mt-4 ">WELCOME TO TOURISM LOVER</h5>
                    <h1 className="">Nature's Majesty <br/> Awaits You</h1>
                    <p className="pb-5 pt-3 ">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                    <button className="rounded-pill  bg-warning px-5 py-2 mb-4 ">Learn More</button>
               </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                <img alt="" src="https://i.ibb.co/fq2WyKH/top-aerial-view-of-antalya-deniz-feneri-2021-04-04-07-51-36-utc-1024x1024.jpg"  className=" w-100 h-100  rounded-3 pb-5"/>
               </div>
           </div>
            
            <div className="row  bg-secondary rounded-3 py-3">
               
                <div className="col-sm-12 col-md-6 col-lg-3 text-center my-4 px-3">
                   <i className="text-warning fs-1 far fa-smile"></i>                
                  <h1 className="text-light"> 125 K +</h1>
                  <h3 className="text-white">Satisfied Client</h3>
                </div>

                <div  className="col-sm-12 col-md-6 col-lg-3 text-center my-4 px-3">
                  <i className="text-danger fs-1 fas fa-male"></i>                
                  <h1 className="text-light"> 100 +</h1>
                  <h3 className="text-white">New Traveler</h3>
                </div>

                <div  className="col-sm-12 col-md-6 col-lg-3 text-center my-4 px-3">
                  <i className="text-info fs-1 far fa-moon"></i>                
                  <h1 className="text-light"> 165 +</h1>
                  <h3 className="text-white">Destination</h3>
                </div>

                <div  className="col-sm-12 col-md-6 col-lg-3 text-center my-4 px-3">
                  <i className="text-warning fs-1 fas fa-gamepad"></i>                
                  <h1 className="text-light"> 15 +</h1>
                  <h3 className="text-white">Award Winning</h3>
                </div>

            </div> 
            <br/>
 

            <div className="row my-5 py-3">
               
                <div className="col-sm-12 col-md-12 col-lg-4 mt-5  px-3">
                             
                  <h5 className="text-info"> OUR TEAM </h5>
                  <h1 className="text-white pt-4">Best <br/> Traveler To <br/> Guide You </h1>
                  <p  className="text-white pt-4">What is a travel guide person? Travel guides plan, sell, and arrange tours for groups or individuals that are normally at long distances from their customer's homes. These professionals also handle the group's transportation, accommodations, and even meals and more often than not travels with the group and stays in the same accommodations.</p>
                </div>

                <div  className="col-sm-12 col-md-12 col-lg-4 py-5 px-5">
                <img alt="" src="https://i.ibb.co/PsLTHB7/147263543-450862592856535-3621934526602806735-n.jpg"  className=" w-100 h-100"/>                
                  <h1 className="text-light">Yea Saleh</h1>
                  <h3 className="text-white">Founder</h3>
                </div>

                <div  className="col-sm-12 col-md-12 col-lg-4 mt-5 px-3">
                <img alt="" src="https://i.ibb.co/Sf715xw/242863189-1547257428943595-6607981281044651091-n.jpg"  className=" w-100 h-100  rounded-3 "/>                
                  <h1 className="text-light"> Nazmul Hauqe</h1>
                  <h3 className="text-white">Co Founder</h3>
                  
                </div>
                
            </div> 
            <br/>
 
            </div>  
            <br/>
             <br/>   
        </div>
    );
};

export default About;