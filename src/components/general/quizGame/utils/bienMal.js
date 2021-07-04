import Swal from 'sweetalert2';

export const bienMal = ( isCorrecto ) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    let icon, title;

    if ( isCorrecto ) {
        icon = 'success'
        title = '¡Respuesta correcta!'
    } else {
        icon = 'error'
        title = 'La respuesta no es correcta:('
    }
    
    Toast.fire({
        icon,
        title
    })
}