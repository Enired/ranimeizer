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

  let variables = {id: Math.floor(Math.random() * 20000) + 1};

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const getAni = () => {
    axios.post('https://graphql.anilist.co', {query, variables}, {headers})
    .then(res => {
      console.log(res);
      if(res.data.data.Media.title.english){
        setAnime(res.data.data.Media.title.english)
      }
      else{
        setAnime(res.data.data.Media.title.romaji)
      }
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

  //End of test
  
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
      <Button text={'test'} onClick={getAni}/>



    </div>
  );
}

export default App;
