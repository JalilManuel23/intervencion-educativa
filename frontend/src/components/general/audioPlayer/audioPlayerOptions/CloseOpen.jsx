import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';

export const CloseOpen = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {
                isOpen ?
                    <FontAwesomeIcon 
                        className="opcion-audio-player" 
                        icon={ faTimes }
                        onClick={ () => setIsOpen( !isOpen ) }
                    />
                :
                    <FontAwesomeIcon 
                        className="opcion-audio-player" 
                        icon={ faCog }
                        onClick={ () => setIsOpen( !isOpen ) } 
                    />
            }
        </>
    )
}
