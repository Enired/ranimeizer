// import logo from './logo.svg';
import './App.css';
import './styles/button-style.scss'
import { useState, useEffect } from 'react';
import axios from 'axios'

import { Button } from './components/Button';

//MUI ICONS
// import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
// import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

function App() {
  const [anime, setAnime] = useState('')

  // const getRandomAnime = () => {
  //   axios.get('/my_animes/random').then(res=>setAnime(res.data.name))
  // }

  const url = 'https://graphql.anilist.co'
  const query = `
  query ($id: Int) {
    Media (id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
  `
  let variables = {id: Math.floor(Math.random() * 20000) + 1};

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const getAni = () => {
    axios.post(url, {query, variables}, {headers})
    .then(res => {

      const animeTitle = res.data.data.Media.title

      animeTitle.english ? setAnime(animeTitle.english) : setAnime(animeTitle.romaji)
      
    })
    .then(variables = {id: Math.floor(Math.random() * 20000) + 1})
    .catch((err)=>{
      if(err.response.status === 404){
        getAni()
      }
      else{
        console.log(err.response.status);
      } 
    })

  }

  useEffect(()=>{
    getAni();
  },[])

  return (
    <div className="App">
      <h1>Ranimeizer</h1>
      <span>You should watch: {anime}</span>
      <br/>
      {/* <Button text={'Rewatch'} onClick={getRandomAnime} />
      <Button text={'Something New'} onClick={getRandomAnime}/> */}
      <Button text={'Give me an Anime'} onClick={getAni}/>



    </div>
  );
}

export default App;
