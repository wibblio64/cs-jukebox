const sfx = {
    hover: new Howl({ src: "/sounds/hover.wav" }),
    pause: new Howl({ src: "/sounds/pause.wav" }),
    play: (index, pitch) => {
        sfx[index].rate(pitch);
        sfx[index].play();
    }
};