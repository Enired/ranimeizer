import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [anime, setAnime] = useState('')

  const getRandomAnime = () => {
    axios.get('/my_animes/random').then(res=>setAnime(res.data.name))
  }
  useEffect(()=>{
    getRandomAnime();
  },[])




  return (
    <div className="App">
      <h1>Welcome to Ranimeizer!!!!!</h1>
      <span>You should watch: {anime}</span>
      <br/>
      <button>Rewatch</button>
      <button>Something New!</button>
    </div>
  );
}

export default App;
