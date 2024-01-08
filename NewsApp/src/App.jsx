import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"
import { useState } from 'react';
import Footer from './Components/Footer';


const App = () => {
  const[category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </div>
  )
}

export default App
