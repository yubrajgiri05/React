import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
     <Container>
      <h1 className="heading-text text-center my-5">Welcome to Home page</h1>
      <Row gx={5} gy={5}>
        <Col lg ={6}>
          Lorem ipsum dolor sit amet consectetur
           adipisicing elit. At dolorum tenetur suscipit. 
           Fugiat error minus facilis eos quod maiores accusantium consequuntur dolores non doloremque, itaque id excepturi quasi sed atque!
        </Col>
        <Col lg ={6}>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur?</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </Col>
      </Row>
     </Container>
    </>
  )
}

export default Home
