import React, { useContext, useReducer } from 'react';
import Song from '../models/song';
import { StateContext } from '../reducer/reducer';

const NowPlayingComponent = () => {
    const [ state ] = useContext<any>(StateContext);
    const song: Song = state.nowPlaying
    return (
        <div>
            <div>{song.author}</div>
            {/* { song?.album_cover && <img src={song.album_cover} style={{zIndex: 0}}></img>} */}
        </div>
    )
}

export default NowPlayingComponent;