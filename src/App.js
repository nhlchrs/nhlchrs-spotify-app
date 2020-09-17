import React,  {useEffect} from 'react';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import Login from './Login';
import Player from './Player'
import { getAccessTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();
function App() {
  const [{ user , token, playlists, songs }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getAccessTokenFromUrl();
        window.location.hash ="";
        const _token = hash.access_token;
        if(_token){
          dispatch({
            type:'SET_TOKEN',
            token:_token
          })
            spotifyApi.setAccessToken(_token);
            spotifyApi.getMe().then((user) => {
              dispatch({
                type : "SET_USER",
                user :user
              });
            });
            spotifyApi.getUserPlaylists().then((playlists)=>{
              dispatch({
                type:"SET_PLAYLIST",
                playlists : playlists
              })
            });
            console.log(playlists);

            spotifyApi.getPlaylist('0GB9chRwz1EI9MkT3BjfbO').then(playlist=>{
              dispatch({
                type:'SET_DISCOVER_WEEKLY',
                discover_weekly : playlist

              })
            })
            }
    }, [ user , dispatch, playlists, songs]);
  return (
    <div className="app">
      {
            token ? <Player spotify={spotifyApi}/> : <Login/>
      }
    </div>
  );
}

export default App;
