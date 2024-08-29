import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
    <div>

      <Carousel className='container'>
      <Carousel.Item>
        <img className='imgFluid'style={{width:"100%", height:'300px'}} src='https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-stars-streaks-over-snow-covered-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imgFluid'style={{width:"100%", height:'300px'}} src='https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-stars-streaks-over-snow-covered-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imgFluid'style={{width:"100%", height:'300px'}} src='https://images.pexels.com/photos/26653530/pexels-photo-26653530/free-photo-of-stars-streaks-over-snow-covered-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'alt=''/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>


    </>
  );
}

export default Home;
