import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function User() {
    let [name,setName] = useState("ram")
    let [age,setAge] = useState(20)

    function changeName()
    {
        setName("name is change from ram")
    }

    function changeAge()
    {
        setAge(10)
    }
    function doSomething(planet)
    {
      console.log("Hellow"+ planet)
    }
    
    
  return (
    <>
      <div className="container">
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2></h2>
        <Button className="m-2" onClick={changeName}>Change name</Button>
        <Button onClick={changeAge}>Change age</Button>
        {/* <Button onClick={doSomething.bind(this,"mars")}>do doSomething</Button> */}
        <Button onClick={()=>{
          doSomething("Mars")
        }}></Button>
      </div>
    </>
  )
}

export default User
