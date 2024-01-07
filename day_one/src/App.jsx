import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Component1 from './Component1';
import Country from './Country';

function App() {
  var[a,b] = useState(100);
  let [countries, setCountries] = useState(
    [
      {name:"India", capital:"New Delhi", pop:"1.4B"},
      {name:"Australia", capital:"Camberra", pop:"40B"},
      {name:"Franch", capital:"Paris", pop:"16.4B"},
    ]
  )
  return (
    <>
     <Container>
       <div className='p-2 fw-bold text-danger'>{a}</div>
       <div onClick={()=>b(a+1)} className="btn btn-primary">click to add</div>
        <Component1 detail={{name: "yubraj" , age: 23 , phone: 9866762408}} />

    <Country name={countries[0].name} capital={countries[0].capital} pop={countries[0].pop}/>
    <Country name={countries[1].name} capital={countries[1].capital} pop={countries[1].pop}/>
    <Country name={countries[2].name} capital={countries[2].capital} pop={countries[2].pop}/>

    {/* {
      countries.map((country)=>{
        return{
          <Country name={country.name} capital={country.capital} pop={country.pop}/>
        }
      })
    } */}

    </Container>
    </>
  )
}

export default App
