import { Button, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
        <Carousel.Caption style={{zIndex:"10"}}>
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{filter:"brightness(30%)"}}
          src="https://source.unsplash.com/random/900×700/?Restaurant"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{filter:"brightness(30%)"}}
          src="https://source.unsplash.com/random/900×700/?Burger"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{filter:"brightness(30%)"}}
          src="https://source.unsplash.com/random/900×700/?Foods"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;