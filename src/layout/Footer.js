import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Footer = () => {
  return (
   <div>
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top'>
<Col md={4} className='d-flex align-items-center'>
<Link to="/" className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>

</Link>
<span className='text-muted fw-medium'>@ 2024 Mern, Inc</span>
</Col>
    </footer>
   </div>
  );
};

export default Footer;
