const sfx = {
    hover: new Audio("/sounds/hover.wav"),
    pause: new Audio("/sounds/pause.wav"),
    play: (index) => {
        sfx[index].currentTime = 0;
        sfx[index].play();
    },
    stop: (index) => {
        sfx[index].currentTime = 0;
        sfx[index].pause();
    }
};