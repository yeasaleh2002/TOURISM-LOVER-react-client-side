import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
 
   {/* Carousel item - 1  */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Cox%27s_Bazar_Sunset.JPG"
      alt="First slide"
    />

      {/* Carousel item caption */}
    <Carousel.Caption>
      <span className="text-white  fs-2 p-2 mb-1  rounded">Cox's Bazar</span> <br /> <br />
      <span className="text-white  p-1 rounded">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. </span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
 
  {/* Carousel item - 2 */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://images.ctfassets.net/pnliwdxhy0tx/3WwlXGBiVYt1eL4CWeDw6a/afbbc3446c7f7711249142b9a19be64f/copenhagen-154.jpg"
      alt="Second slide"
    />

  {/* Carousel item caption */}
    <Carousel.Caption>
    <span className="text-white bg-danger fs-2 p-2 mb-1 rounded">Copenhagen</span> <br /> <br />
      <span className="text-white bg-primary  p-1 rounded">Copenhagen, Denmark’s capital, sits on the coastal islands of Zealand and Amager. It’s linked to Malmo in southern Sweden by the Öresund Bridge. </span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
 
  {/* Carousel item - 3  */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://nomadparadise.com/wp-content/uploads/2021/04/pakistan-places-07.jpg"
      alt="Third slide"
    />

  {/* Carousel item caption */}
    <Carousel.Caption>
    <span className="text-white bg-danger fs-2 p-2 mb-1 rounded">Jammu And Kashmir</span> <br /> <br />
      <span className="text-white bg-primary p-1 rounded">Jammu and Kashmir was a region formerly administered by India as a state from 1954 to 2019.</span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
 
  {/* Carousel item - 4  */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg"
      alt="Four slide"
    />

  {/* Carousel item caption */}
    <Carousel.Caption>
    <span className="text-white bg-success fs-2 p-2 mb-1 rounded">Mount Everest</span> <br /> <br />
      <span className="text-white bg-danger p-1 rounded">Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.</span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
 
  {/* Carousel item - 5  */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://www.teahub.io/photos/full/313-3131100_tropical-rainforest-wallpapers-wallpaper-photography-amazon-rainforest-wildlife.jpg"
      alt="Five slide"
    />

  {/* Carousel item caption */}
    <Carousel.Caption>
    <span className="text-white bg-primary fs-2 p-2 mb-1 rounded">Amazon Rainforest</span> <br /> <br />
      <span className="text-white bg-danger p-1 rounded">The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru.  </span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
 
  {/* Carousel item - 6  */}
  <Carousel.Item>

      {/* Carousel item image */}
    <img
      className="d-block w-100"
      src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/26/117390.jpg"
      alt="six slide"
    />

  {/* Carousel item caption */}
    <Carousel.Caption>
    <span className="text-white bg-primary fs-2 p-2 mb-1 rounded">Vietnam</span> <br /> <br />
      <span className="text-white bg-dark p-1 rounded">Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. </span> <br /> <br />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;