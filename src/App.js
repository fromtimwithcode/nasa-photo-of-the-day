import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';
import "./App.css";
import Photo from './Photo';
import Header from './Header';
import Explanation from './Explanation';

function App() {
  const [data, setData] = useState([]);
  const [potd, setPotd] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
        setPotd(res.data.url)
      }).catch(err => {
        setError(`Please try again later.`)
      })
  })

  return (
    <div className='App'>
      { error && <h1>{error}</h1> }
      <Header copyright={data.copyright} date={data.date} title={data.title} />
      <Photo potd={potd}/>
      <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;