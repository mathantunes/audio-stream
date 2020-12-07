import { Container, Row, Col } from 'react-grid-system';
import React from 'react';
import Song from '../models/song';
import Player from './Player';

const SongComponent = (props: any) => {
    const s : Song = props.song;
    return <Container fluid className="song-item">
        <Row>
            <Col>
                {s.title}
                <div className="song-author">{s.author}</div>
            </Col>
            <Col xs={1.5} md={1.5} className='song-player'>
                <Player song={s}></Player>
            </Col>
        </Row>
    </Container>;
}

export default SongComponent;