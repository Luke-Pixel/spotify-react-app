  
import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {

  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //token: 'BQA2VrBgFsln8j-PNDd_FD7BnbQQ-s-kTUk91lt5GZ4qfo-_n4WDCyTtWwoAYmJverjFYXGU4VgQJX3-53PbpaoyaSr03gp61SCJXDTW3Hpy3nt16nWgd8wUJRL52TWmAJn7LQb_-9JjoU4UFoo2cnDjU1UVsN5N'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DEFAULT_PLAYLIST':
            return{
                ...state,
                discover_weekly: action.default_playlist,
            }

        default:
            return state;
    }
}

export default reducer;