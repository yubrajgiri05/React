import React, { useState } from 'react'

const Searchbar = ({setResults}) => {
    const [input,setInput] = useState("");

    const fetchData =(value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) =>{
           const results = json.filter((user) =>{
            return(
                value && user &&
                user.name &&
                user.name.toLowerCase().include(value)
            );
           });
           setResult(results);
        });
    };

    const handleChange=(value)=>{
        setInput(value);
        fetchData(value);
    };
  return (
    <>
      <div className="imput-wrapper">
        <form className="d-flex" role="search">
                <input className="form-control me-2" type="search"
                 placeholder="Search" aria-label="Search"
                 value={input} onChange={(e)=>handleChange(e.target.value)}
                 />       
        </form>

      </div>
    </>
  )
}

export default Searchbar
