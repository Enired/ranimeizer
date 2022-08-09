import logo from './logo.svg';
import './App.css';
import './styles/button-style.scss'
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
      <h1>Ranimeizer</h1>
      <span>You should watch: {anime}</span>
      <br/>
      <div className="styled-button anime-button" id="rewatch-anime-button" onClick={()=>{getRandomAnime()}}>
        Rewatch
        <div id="underline"/>
      </div>
      <div className="styled-button anime-button" id="new-anime-button" onClick={()=>{getRandomAnime()}}>
        Something New!
        <div id="underline"/>
      </div>
    </div>
  );
}

export default App;
