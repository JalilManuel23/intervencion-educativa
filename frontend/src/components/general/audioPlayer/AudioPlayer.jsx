import React, { useState } from 'react';
import './audioPlayer.css';

import { PlayPause } from './audioPlayerOptions/PlayPause';
import { RestartAudio } from './audioPlayerOptions/RestartAudio';
import { CloseOpen } from './audioPlayerOptions/CloseOpen';

export const AudioPlayer = ({ sound }) => {
    const [isPlaying, setIsPlaying] = useState( true );
    const [isOpen, setIsOpen] = useState( true );

    let ancho = ( isOpen ) ? "200px" : "80px";

    return (
        <div 
            className="audio-player d-flex justify-content-around align-items-center"
            style={{ width:  ancho }}
        >   
            {
                isOpen && 
                    <>
                        <PlayPause isPlaying={ isPlaying } setIsPlaying={ setIsPlaying } sound={ sound } />
                        <RestartAudio isPlaying={ isPlaying } setIsPlaying={ setIsPlaying } sound={ sound } />
                    </>
            }
            <CloseOpen isOpen={ isOpen } setIsOpen={ setIsOpen } />
        </div>
    )
}
