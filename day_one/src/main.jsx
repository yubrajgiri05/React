import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Product from './Product.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Product name="iphone" price="2000k" info={{ram:"2gb", screen:"40cm"}}/>
    <Product name="Samsung"  price="5400k"  info={{ram:"2gb", screen:"40cm"}}/>
  </React.StrictMode>,
)
