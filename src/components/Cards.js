import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Cards() {
  return (
    <div>
        <Card className="mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              This is some important text
              <div className="">
                <Container className="w-100">
                  <select className="m-2 h-100  bg-success rounded">
                    {Array.from(Array(6), (e, i) => {
                      return (
                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                      );
                    })}
                  </select>

                  <select className="m-2 h-100  bg-success rounded">
                    <option value="Half">Half</option>
                    <option value="Full">Full</option>
                  </select>

                  <div className="d-inline h-100 fs-5 fw-medium">
                    Total Price
                  </div>
                </Container>
              </div>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
  )
}

export default Cards;