import React from 'react';
import "./Login.css"
import {loginUrl} from "./spotify"

function Login() {
    return (
        <div className='border'>
            <div className="login">
                {/*Logo*/}
                <img className='logo' src={require("./images/Spotify_Logo_CMYK_White.png")} alt="" />
                <img className='artist_img' src={require("./images/the-weeknd-.jpg")} alt="" /> 
            {/*b    utton*/}
                <a href={loginUrl}>AUTHENTICATEE WITH SPOTIFY</a>
            </div>
        </div>
    )
}

export default Login;
