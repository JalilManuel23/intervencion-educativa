import shuffle from 'lodash.shuffle';

export default ( datosRecibidos ) => {
    let cartas = [];

    datosRecibidos.map( datos => {
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