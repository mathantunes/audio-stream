import React, { useContext, useReducer } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Song from '../models/song';
import { StateContext } from '../reducer/reducer';

const NowPlayingComponent = () => {
    const [ state ] = useContext<any>(StateContext);
    const song: Song = state.nowPlaying
    const validNumberDuration = !isNaN(song?.preview_duration ?? 0)
    return (
        <Container  xl className="now-playing" style={{zIndex: 0}}>
            <Col sm={2}>
                { song?.id && <div style={{fontWeight: "bold", marginBottom: 30}}>Now Playing</div> }
                { song?.album_cover && <Row><img src={song.album_cover} style={{zIndex: 0}}></img></Row>}
                
                <div style={{fontWeight: "bold"}}>{song.title}</div>
                <div>{song.author}</div>
                { validNumberDuration && <div>{fmtMSS(song.preview_duration ?? 0)}</div> }
            </Col>
        </Container>
    )
}

const fmtMSS = (s: number) => (s-(s%=60))/60+(9<s?':':':0')+s

export default NowPlayingComponent;