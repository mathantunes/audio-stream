import React from 'react';
import { useState, useEffect } from 'react';
import * as axios from 'axios';
import useDebounce from './deboucer';
import Song from '../models/song';

const SearchComponent = () => {
    const [ searchValue, setSearchValue ] = useState("")
    const [ songs, setSongs ] = useState<Song[]>([])
    const debouncedSearch = useDebounce(searchValue, 500);
    
    useEffect(
        () => {
            if(searchValue != ""){
                fetchSearch(debouncedSearch);
            }
        },
        [debouncedSearch]
    )

    const fetchSearch = (search: string = "") => {
        axios.default.get(`http://localhost:3001/songs/${search}`).then(
            dt => setSongs((dt?.data?.songs as Song[]))
        )
    }

    return (
        <div>
            <div className="search-wrapper">
                <input
                    className="search-bar"
                    type="text" 
                    value={searchValue} 
                    placeholder="Search song"
                    onChange={(e) => setSearchValue(e.target.value)} 
                />
            </div>
            <div className='song-list'>
            {
                songs && songs.length > 0 &&
                songs.map(s => 
                    <div className="song-item">
                        {s.title}
                        <div className="song-author">{s.author}</div>
                    </div>    
                )
            }
            </div>
        </div>
        
    )
}



export default SearchComponent;