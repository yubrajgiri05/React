import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about from '../assets/about.png'

const About = () => {
  return (
    <>
     <Container>
     <h1 className="text-center my-5 text-danger">Welcome to About page</h1>
     <Row gx={5}>
        <Col lg ={6}>
        <h2 className="text-success pb-3">About Us</h2>
        <h5 className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, blanditiis? Amet dolores molestiae vitae maiores delectus fuga error magnam. Praesentium dolorum assumenda nisi nesciunt. Voluptas minus aliquam, porro quae 
          doloremque amet? Quaerat, libero aliquid? 
          Itaque sint ex, eius quisquam numquam ab facilis saepe fugit tenetur enim eveniet perspiciatis facere temporibus deserunt natus vel aliquid ipsam similique. Ea quis consectetur, omnis magni eum, accusantium hic dolorum, reiciend
          is est iusto nostrum maxime incidunt? Eum nesciunt culpa quo ad odio? Corrupti, perferendis reprehenderit? Autem, incidunt rem aspernatur aliquid ipsam quia maiores unde accusantium!</h5>
        </Col>
        <Col lg ={6}>
         <img className="pt-5" src={about} alt=""/>
        </Col>
      </Row>
     </Container>
    </>
  )
}

export default About
