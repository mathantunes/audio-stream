import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import * as axios from 'axios';
import useDebounce from './deboucer';
import Song from '../models/song';
import { Container, Col } from 'react-grid-system';
import SongComponent from './SongComponent';
import NowPlayingComponent from './NowPlayingComponent';
import { StateContext } from '../reducer/reducer';

const SearchComponent = () => {
    const [ searchValue, setSearchValue ] = useState("")
    const debouncedSearch = useDebounce(searchValue, 500);
    const [ state, dispatch ] = useContext<any>(StateContext);
    const { songs } = state
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
            dt => dispatch({ type: 'FETCHED_SONGS', songs: dt?.data?.songs as Song[] })
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
            <Container fluid>
                <Col xs={4} md={4}>
                    <div className='song-list'>
                    {
                        songs && songs.length > 0 &&
                        songs.map((s :Song) => 
                            <SongComponent song={s} dispatch={dispatch}></SongComponent>
                        )
                    }
                    </div>
                </Col>
                <Col>
                    <NowPlayingComponent/>
                </Col>
            </Container>
        </div>
    )
}



export default SearchComponent;
