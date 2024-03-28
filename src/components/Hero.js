import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../stylings/Home.css';

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Caption style={{ zIndex: "10" }}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success text-white bg-success">Search</Button>
        </Form>
      </Carousel.Caption>

      <Carousel.Item className='car'>
        <img
          className="d-block w-100"
          style={{ filter: "brightness(30%)" }}
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className='car'>
        <img
          className="d-block w-100"
          style={{ filter: "brightness(30%)" }}
          src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101282760/101282760.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className='car'>
        <img
          className="d-block w-100"
          style={{ filter: "brightness(30%)" }}
          src="https://img.freepik.com/premium-photo/table-full-food-including-rice-curry-plate-food_900958-7307.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711238400&semt=ais"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
