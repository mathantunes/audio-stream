import React from 'react';
import { useState, useEffect } from 'react';
import Song from '../models/song';

const useAudio = (url: string): [boolean, () => void] => {
    const [audio, setAudio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
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
  
    return [playing, toggle];
  };
  
  const Player = (props: any) => {
    const song: Song = props.song;
    const [ playing, toggle ] = useAudio(song.preview_link);
    return (
      <div>
        <button onClick={() => toggle()}>{playing ? "Pause" : "Play"}</button>
      </div>
    );
  };

  export default Player;