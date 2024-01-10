import React, { useState } from 'react'
import Searchbar from './Component/Searchbar'
import Search from './Search';



const App = () => {

  const [result,setResult] = useState([]);
  return (
    <>
     <div className="container p-5 bg-danger text-center">
       <Searchbar setResult={setResult}/>
       <Search result={result}/>
     </div>
    </>
  )
}

export default App
