import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [anime, setAnime] = useState('')

  useEffect(()=>{
  },[anime])




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
