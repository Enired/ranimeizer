import logo from './logo.svg';
import './App.css';
import './styles/button-style.scss'
import { useState, useEffect } from 'react';
import axios from 'axios'

import { Button } from './components/Button';

//MUI ICONS
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

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
      <Button text={'Rewatch'} onClick={getRandomAnime} />
      <Button text={'Something New'} onClick={getRandomAnime}/>



    </div>
  );
}

export default App;
