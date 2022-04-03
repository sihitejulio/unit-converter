import logo from './logo.svg';
import Product from './page/productFunctional';
import './App.css';
import React,{ useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://reqres.in/api/products/3")
    .then(res => res.json())
    .then(
      (result) => {
        setProduct(result.data);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        // this.setState({
        //   isLoaded: true,
        //   error
        // });
      });
  });

  return (
    <div className="App"> 
     <BrowserRouter>
        <ul>
          <li>
            <Link to="/Product">Product</Link>
          </li>
        </ul>
        <Routes>
            <Route path="/product" element={  <Product data={product}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
