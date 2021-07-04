import Swal from 'sweetalert2';

export const juegoFinalizado = () => {
    return (
        Swal.fire({
            title: `¡Has terminado el juego!`,
            showDenyButton: true,
            confirmButtonText: `Jugar de nuevo`,
            denyButtonText: `Cerrar`,
            icon: 'success'
        }).then((result) => {
            if (result.isConfirmed) {
                // reiniciarJuego();
            } else if (result.isDenied) {
                Swal.fire('¡Gracias por jugar!', '', '');
            }
        })
    )
}
