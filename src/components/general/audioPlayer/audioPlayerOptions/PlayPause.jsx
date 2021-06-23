import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export const PlayPause = ({ isPlaying, setIsPlaying }) => {
    return (
        <>
            {
                !isPlaying ?
                    <FontAwesomeIcon 
                        className="opcion-audio-player" 
                        icon={ faPlay }
                        onClick={ () => setIsPlaying( !isPlaying ) }
                    />
                :
                    <FontAwesomeIcon 
                        className="opcion-audio-player" 
                        icon={ faPause }
                        onClick={ () => setIsPlaying( !isPlaying ) } 
                    />
            }
        </>
    )
}
