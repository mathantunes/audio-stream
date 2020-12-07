import React, { createContext } from "react";
import Song from "../models/song";

export const initialState = {
    songs: [] as Song[],
    nowPlaying: {} as Song
};

export const reducer = (state: any, action: any) => {
    switch(action.type){
        case 'FETCHED_SONGS':
            return {...state, songs: [...action.songs] }
        case 'NOW_PLAYING':
            return {...state, nowPlaying: action.song}
        default:
            return state;
    }
}

export const StateContext = createContext(null);

export const StateProvider = (props: any) => (
    <StateContext.Provider value={props.reducer}>
        {props.children}
    </StateContext.Provider>
)