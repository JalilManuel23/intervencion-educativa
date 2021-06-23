import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

export const RestartAudio = ({ sound, setIsPlaying }) => {
    return (
        <FontAwesomeIcon 
            className="opcion-audio-player" 
            icon={ faRedoAlt } 
            onClick={ () => {
                sound.pause();
                sound.currentTime =0; 
                sound.play();
                setIsPlaying(true);
            }}
        />
    )
}
