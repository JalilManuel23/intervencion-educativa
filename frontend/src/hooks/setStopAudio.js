export const setStopAudio = ( sound ) => {
    sound.pause();
    sound.currentTime = 0;
}
