import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';
import "./App.css";
import Photo from './Photo';
import Header from './Header';
import Explanation from './Explanation';
import Cal from './Cal';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [theDate, setTheDate] = useState(Date());

  let month = (new Date()).getMonth();
  let day = (new Date()).getDate();
  let year = (new Date()).getFullYear();
  let date = `${year}-${month + 1}-${day}`
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
      }).catch(err => {
        setError(`Please try again later.`)
      })
  })

  const dateSelect = input => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${input}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        setError(`Please try again later.`)
      })
  }

  return (
    <>
    <div className='App'>
      { error && <h1>{error}</h1> }
      <Header copyright={data.copyright} date={data.date} title={data.title} />
    </div>
    <div className='App'>  
      <Cal dateSelect={dateSelect} />
    </div>  
    <div className='App'>  
      <Photo potd={data.url}/>
    </div>
    <div className='App'>
      <Explanation explanation={data.explanation} />
    </div>
    </>
  );
}

export default App;