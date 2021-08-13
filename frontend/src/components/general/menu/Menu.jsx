import React from 'react';
import { Link } from 'react-router-dom';
import imagenes from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './menu.css';

export const Menu = () => {
    const ventanaCalificacion = async () => { 
        const { value: inputValue} = await Swal.fire({
            title: '¿Te está gustando el taller?',
            icon: 'question',
            input: 'range',
            inputLabel: 'Califica tu experiencia del 1 al 5',
            inputAttributes: {
                min: 1,
                max: 5,
                step: 1
            },
            inputValue: 1
        })

        fetch('/agregar_calif', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                calificacion: inputValue.toString()
            }), // data can be `string` or {object}!
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            res.json().then((data) => {
                console.log(data);
            });
        })
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <div className="col-3 d-flex justify-content-between">
                    <img src={imagenes.utd} alt="" className="logos" />
                    <img src={imagenes.enfermeria} alt="" className="logos" />
                    <img src={imagenes.ujed} alt="" className="logos" />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
                        <li class="nav nav-item"> 
                            <Link onClick={ ventanaCalificacion } class="nav-link active" aria-current="page" to="/"> 
                                <FontAwesomeIcon icon={ faHome } /> Inicio
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}