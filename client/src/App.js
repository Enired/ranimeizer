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

  //Here we are testing getting animes from the anilist api
  const query= `
  query ($id: Int) { # Define which variables will be used in the query (id)
    Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      title {
        romaji
        english
        native
      }
    }
  }
  `

  const variables = {  id: 15125};

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const getAni = () => {
    axios.post('https://graphql.anilist.co', {query, variables}, {headers})
    .then(res => console.log(res.data.data.Media.title.english))
    .catch(err => console.log(err.message))

  }

  //End of test
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
      <Button text={'test'} onClick={getAni}/>



    </div>
  );
}

export default App;
