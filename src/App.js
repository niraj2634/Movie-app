import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import SingleProduct from './components/SingleProduct';
import About from './components/About';

function App() {

  const [data , setData] = useState([]);
  const fetchData = async() => {
    const x = await axios.get('https://api.tvmaze.com/search/shows?q=all');
    console.log("hi data" , x.data);
   setData(x.data);}
   
 useEffect(() => {
  
         fetchData();
 }, [])

  return (
    <Router>
    <Navbar/>
 
    <Routes>
    <Route path="/" element={<Homepage data={data} />} />
      <Route path="/About" element={<About />} />
      <Route
            exact
            path="/show/:id"
            element={<SingleProduct data={data} />}
          />
      
    </Routes>
    </Router>   
  );
}

export default App;