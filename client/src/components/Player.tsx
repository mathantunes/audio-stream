import React, { useContext, useReducer } from 'react';
import { useState, useEffect } from 'react';
import Song from '../models/song';
import { FaPlay, FaPause } from 'react-icons/fa';
import { StateContext } from '../reducer/reducer';

const useAudio = (url: string): [boolean, () => void, () => void, number] => {
    const [audio, setAudio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);
    const stop = () => setPlaying(false);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );

    useEffect(() => {
        setAudio(new Audio(url))
    }, [url])
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle, stop, audio?.duration ?? 0];
  };
  
  const Player = (props: any) => {
    const song: Song = props.song;
    const [ state, dispatch ] = useContext<any>(StateContext);
    const [ playing, toggle, stop, dur ] = useAudio(song.preview_link);
    if(playing && state?.nowPlaying?.id !== undefined && state?.nowPlaying?.id !== song.id){
      stop()
    }
    return (
      <div>
        <button className='player-button' onClick={() => {
          toggle()
          dispatch({ type: 'NOW_PLAYING', song: {...song, isPlaying: !playing, preview_duration: Math.ceil(dur) } as Song})
        }}>{playing ? <FaPause/> : <FaPlay/>}</button>
      </div>
    );
  };

  export default Player;