
import axios from "axios";
export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;

const scopes = [
  "user-read-private", 
  "user-read-email",
  "user-read-recently-played", 
  "user-top-read",
  "user-follow-read",
  "user-follow-modify",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public"
];

const EXPIRATION = 3600 * 1000; // 1 hour in milliseconds;

const setTokenTimestamp = () => {
  window.localStorage.setItem("spotify_tokenTimestamp", Date.now());
}

const getTokenTimestamp = () => {
  return window.localStorage.getItem("spotify_tokenTimestamp")
}

const getLocalToken = () => {
  return window.localStorage.getItem("spotify_localToken");
}


export const setLocalToken = (token) => {
  setTokenTimestamp();
  window.localStorage.setItem("spotify_localToken", token);
  window.location.hash = "";
}

export const checkToken = () => {
  const tokenRetrieved = getLocalToken();
  if(tokenRetrieved && (Date.now() - getTokenTimestamp() < EXPIRATION)) {
    return tokenRetrieved;
  } else {
    const params = getHashParams();
    if(params.access_token) {
      setLocalToken(params.access_token);
      return params.access_token;
    } else {
      return null;
    }
  }
}



export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      if(parts[0] !== "") {
        return initial;
      } else {
        return null
      }
    }, {});
};

export const getHashParams = () => {
  const hashParams = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};



export const getUserInfo = async () =>  {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me", {headers});
}

export const getUserPlaylists= async () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me/playlists", {headers})
}

export const getUserArtists= async () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me/following?type=artist", {headers})
}

export const getRecentTracks= async () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me/player/recently-played", {headers})
}


//Artists
export const getTopArtists4Weeks = () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term", {headers});
}

export const getTopArtists6Months = () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term", {headers});
}

export const getTopArtistsAllTimes = () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get(`https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term`, {headers});
}

//Tracks
export const getTopTracks4Weeks = () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term", {headers});
}

export const getTopTracks6Months = () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term", {headers});
}

export const getTopTracksAllTimes = () => {
  const headers = {
    Authorization: `Bearer ${getLocalToken()}`,
    'Content-Type': 'application/json',
  };
  return axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term`, {headers});
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
