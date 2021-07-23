import React from 'react';
import { Link } from 'react-router-dom';
import './control.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuControl = ({ rutas, stopAudio }) => {

    let contador = 0;

    return (
        <div class="btn-group dropup">
            <button type="button" class="btn btn-secondary">
                <Link 
                    to={ rutas[0].ruta }
                    onClick={ stopAudio }
                >
                    <FontAwesomeIcon icon={ faHome } />
                </Link>
            </button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                {
                    rutas.map( rutas => {
                        contador++;
                        let { titulo, ruta } = rutas;
                        return(
                            <li><Link to={ ruta } class="dropdown-item" onClick={ stopAudio }>{ contador }. { titulo }</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
