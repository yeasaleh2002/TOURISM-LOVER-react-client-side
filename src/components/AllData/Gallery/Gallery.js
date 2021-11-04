import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="container mb-5">
            
            <div className="my-5">
               <h2 className="text-danger text-center my-5">World Most Beautiful places</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                        
                        {/* maldives sea beach part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/cFTZzyt/aerial-view.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-danger">Maldives Sea beach</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                         {/* Amazon RainForest part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/vB0y1RC/images-2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Amazon RainForest</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                        {/* Cox's Bazar sea beach part*/}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/DVR3rhR/images.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><span className="text-warning fs-3">Cox's Bazar sea beach</span></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            

                              {/* Sundarban Forest part*/}    
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/DtHzG8Y/download.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3> Sundarban Forest</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/* Switzerland part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/gTM94Y3/download-12.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Switzerland</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/* Vietnam part  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/WKJd3xC/download-11.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Vietnam</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                {/* Mount Everest part*/}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/VqDrBJL/download-10.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark mt-3">Mount Everest </h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                       {/* IceLand part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/txSgR90/download-9.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-danger">IceLand</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
             
         
                
                        {/* Madina part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/TRb4g8V/download-8.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Madina</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/* Makkah part*/}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/sV35yMG/download-7.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Madina</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                     {/* misor pyramid part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/C6G8zCq/download-6.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Misor Pyramid</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                         {/* Chinese Great Wall part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/HHVYtrk/download-5.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Chinese Great Wall</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                             {/*Taj Mohol part*/}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style ">
                        <Card.Img src="https://i.ibb.co/28GHy86/download-4.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Taj Mohol</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/* Copenhegen part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/MCLqwNP/download-3.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Copenhegen</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/* Jaflong part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/ypdgyPt/download-2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Jaflong</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                       {/* sajek valley part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/Rcw9xmg/download-1.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><span className="bg-info fs-3 py-1 px-3">Sajek valley </span></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                        {/* Turkey part */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/tmW8n9L/images-1.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Turkey</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
            </Row>
        </div>




             {/* -------------------------Allteam member part start---------------------------- */}
         
         
         
              <div className="my-5">
                 <h2 className="text-center text-info my-5">Our All team Members</h2>
                  <Row xs={1} md={2} lg={3} className="g-4">
                        
                        {/* single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/BnLDsD9/147263543-450862592856535-3621934526602806735-n.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-white">Yea Saleh</h3></Card.Title>
                            <Card.Title><h3 className="text-white">Founder</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                         {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/pvXXDxB/242863189-1547257428943595-6607981281044651091-n.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Nazmul Houqe</h3></Card.Title>
                            <Card.Title><h3 className="text-dark">Co Founder</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                        {/*  single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/WfFTPfD/download-2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><span className="text-dark fs-3">Fahim Saleh</span></Card.Title>
                            <Card.Title><span className="text-dark fs-3">Tour Guide</span></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            

                              {/* single image */}    
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/42sDJTw/download-1.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3> Sadman Sakib</h3></Card.Title>
                            <Card.Title><h3> Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/PN3csXC/96822042-handsome-businessman-in-suit-and-glasses-is-looking-at-his-watch-and-smiling-while-standing.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-danger">Faraz Ahmed</h3></Card.Title>
                            <Card.Title><h3 className="text-danger">Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
   
                
                          {/*  single image   */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/DWPF75T/images.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Sanzu</h3></Card.Title>
                            <Card.Title><h3 className="text-dark">Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                {/*  single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/w7mhwxW/images-10.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-light mt-3">Shakib Ahmed </h3></Card.Title>
                            <Card.Title><h3 className="text-light mt-3">Tour Guide </h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                       {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/KD5hdxY/images-9.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-info">Foysal Mahmud</h3></Card.Title>
                            <Card.Title><h3 className="text-info">Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
             
         
                
                        {/* single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/PhqBPbL/images-8.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-white">Rittab Sheik</h3></Card.Title>
                            <Card.Title><h3 className="text-dark">Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/*  single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/PNzxKng/download-4.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Rahul Junior</h3></Card.Title>
                            <Card.Title><h3>Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                     {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/8Ph9pML/download-3.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Mustakib Fahad</h3></Card.Title>
                            <Card.Title><h3 className="text-dark">Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                         {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/GC99Pnz/images-2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Rezu khan</h3></Card.Title>
                            <Card.Title><h3>Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                         {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/Pt00qs5/images-1.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Sakir mahmud</h3></Card.Title>
                            <Card.Title><h3>Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                         {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/DkzxL4Z/download.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Lotif khan</h3></Card.Title>
                            <Card.Title><h3>Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                    
                
                             {/* single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style ">
                        <Card.Img src="https://i.ibb.co/jH9t2X0/images-7.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Arefin Ahmed</h3></Card.Title>
                            <Card.Title><h3 className="text-dark">Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/*  single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/0jTK6WN/images-6.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-white">Foyaad rahman</h3></Card.Title>
                            <Card.Title><h3 className="text-white">Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                          {/*  single image  */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/vJpsXJM/images-5.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3 className="text-dark">Rambo </h3></Card.Title>
                            <Card.Title><h3 className="text-dark">Tour Guide</h3 ></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                       {/*  single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/sWfVv0w/images-4.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><span className=" fs-3 py-1 px-3">Rifat Hasan </span></Card.Title>
                            <Card.Title><span className=" fs-3 py-1 px-3">Tour Guide </span></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
                
                        {/*  single image */}
                    <Col>
                      <Card className="bg-dark text-white h-100 w-100 gellary-background-style">
                        <Card.Img src="https://i.ibb.co/b5cVj4f/images-3.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h3>Junayed </h3></Card.Title>
                            <Card.Title><h3>Tour Guide</h3></Card.Title>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
            
            </Row>
         </div>
           
        </div>
    );
};

export default Gallery;