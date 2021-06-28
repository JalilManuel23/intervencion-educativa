import React from 'react';
import './memorama.css';

export const Memorama = () => {
    return (
        <div className="memorama container d-flex flex-column align-items-center mt-5 p-4">
            <h3>Título</h3>
            <div className="cartas d-flex flex-wrap">
                <div className="carta col-4 col-md-2">C</div>
                <div className="carta col-4 col-md-2">C</div>
                <div className="carta col-4 col-md-2">C</div>
                <div className="carta col-3 col-md-2">C</div>
                <div className="carta col-3 col-md-2">C</div>
                <div className="carta col-3 col-md-2">C</div>
                <div className="carta col-3 col-md-2">C</div>
                <div className="carta col-3 col-md-2">C</div>
            </div>
        </div>
    )
}
