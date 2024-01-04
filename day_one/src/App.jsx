import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Component1 from './Component1';

function App() {
  var[a,b] = useState(100);
  return (
    <>
     <Container>
       <div className='p-2 fw-bold text-danger'>{a}</div>
       <div onClick={()=>b(a+1)} className="btn btn-primary">click to add</div>
        <Component1 detail={{name: "yubraj" , age: 23 , phone: 9866762408}} />
    </Container>
    </>
  )
}

export default App
