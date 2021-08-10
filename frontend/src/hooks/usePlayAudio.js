import { useEffect } from "react";

export const usePlayAudio = ( audio ) => {

    const sound = new Audio( audio );

    useEffect(() => {
        setTimeout( () => {
            sound.play();
        }, 1000)
    }, []);

    return sound;
}
