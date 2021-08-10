import Swal from 'sweetalert2';

export const juegoFinalizado = () => {
    return (
        Swal.fire({
            title: `¡Has terminado el juego!`,
            icon: 'success',
            showConfirmButton: false,
        })
    )
}
