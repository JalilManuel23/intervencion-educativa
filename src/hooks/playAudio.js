export const playAudio = (audio) => {
    const sound = new Audio(audio);

    sound.play();

    return sound;
}