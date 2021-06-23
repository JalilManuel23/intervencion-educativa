import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

export const RestartAudio = () => {
    return (
        <FontAwesomeIcon 
            className="opcion-audio-player" 
            icon={ faRedoAlt } 
        />
    )
}
