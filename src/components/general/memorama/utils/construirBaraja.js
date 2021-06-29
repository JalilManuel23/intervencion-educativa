import shuffle from 'lodash.shuffle';
import { datosEjemplo } from '../data/sample';

export default () => {
    let cartas = [];

    datosEjemplo.map( datos => {
        const carta = {
            ...datos,
            fueAdivinada: false
        };

        cartas.push(carta);
        cartas.push({
            ...carta
        });
    });

    return shuffle(cartas);
};