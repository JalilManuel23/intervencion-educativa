import React from 'react';
import { Videos } from '../../../talleres/Videos';
import audio from "../../../../assets/sounds/en-tiempos.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'
import imagenes from '../../../../assets/images';

export const PresenVideo = () => {
    return (
        <Videos 
            titulo="En tiempos de pandemia, nuestro amor propio debe aumentar"
            texto="Veamos un video para descubrir su valor"
            imagen={ imagenes.feliz }
            enlace="/ninos/amor-propio/videos/importancia"
            sonido={ audio }
            fuente="https://www.google.com/search?sxsrf=ALeKk03WcaSH_QKuXjttHG8Hu7T6BhC1XA:1628783043508&q=feliz+ni%C3%B1a+animada&tbm=isch&source=iu&ictx=1&tbs=simg:CAESkAIJAmwwrQqlq0EahAILELCMpwgaOQo3CAQSFNgPoS7QOugQ2QbJKbQk6ijtKLgJGhmJKJYC8AlTQPHRFMtQy5p7pYToh5flI5-GIAUwBAwLEI6u_1ggaCgoICAESBK5Fa1cMCxCd7cEJGqUBCiAKDWFuaW1hdGVkL2tpZHPapYj2AwsKCS9qL2M4emxkMgoYCgVoYXBwedqliPYDCwoJL2EvYmY2ZGtmCicKE2ZpY3Rpb25hbCBjaGFyYWN0ZXLapYj2AwwKCi9tLzAyaDdsa3QKGgoHZm9yIGtpZNqliPYDCwoJL2EvNXBmbmJyCiIKEGFuaW1hdGVkIGNhcnRvb27apYj2AwoKCC9tLzA5NWJiDA&fir=X1pXr0cFvt3wLM%252CHQ9x1vUyegfi7M%252C_&vet=1&usg=AI4_-kQC992FX2ejrE4EN8VM9jU_s9jg8g&sa=X&ved=2ahUKEwiU9OTV6avyAhXQmmoFHYnxAIoQ9QF6BAggEAE#imgrc=X1pXr0cFvt3wLM"
            rutas={ rutasAmorPropio }
            id={ 7 }
        />
    )
}
