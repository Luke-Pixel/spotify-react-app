import React, {useEffect, useState} from 'react';
import Login from './Login'
import Player from './Player'
import {getTokenFromUrl} from "./spotify"
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

//f5d287d32f1d4ce5a1e97ac8fd472a25

function App() {

  const[{token}, dispatch] = useDataLayerValue();
 

  //retrieve hash token at login
  useEffect( () => {
    const hash = getTokenFromUrl();
    //clear hash token from url
    window.location.hash = "";
    //retrieve access token
    const _token = hash.access_token;

    //Set spotify access token
    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      
      
      spotify.setAccessToken(_token)
      //retrieve user data with API
      spotify.getMe()
        .then(user => {
          
          dispatch({
            type: 'SET_USER',
            user: user 
          })
        })
        //retrieve users public playlists with API
        spotify.getUserPlaylists()
          .then((playlists) => {
            console.log('playlists: ', playlists);
            dispatch({
              type: 'SET_PLAYLISTS',
              playlists: playlists,
              
            });
          });

          spotify.getPlaylist('0DuoU1z6QxYVaLlnCjc365')
            .then((response) => 
              dispatch({
                type: 'SET_DEFAULT_PLAYLIST',
                default_playlist: response,
              })
            );
          
    }
    console.log("the token is", _token);
    
  }, []);

  //console.log('user', user);
  console.log('token: ',token)

  return (
    <div className="app">
      {
        token ? 
          <Player spotify={spotify}/> : 
          <Login/>
      }
      
      {/*Spotify Logo */}

      {/* login button */}


    </div>
  );
}

export default App;
