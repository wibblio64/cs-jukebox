let toggled = false;
let track = null;

const toggleTrack = () => {
    if (track === null) return;
    const toggleEl = document.querySelector("#radio-toggle");
    if (toggled) {
        resumeTrack();
        sfx.play("pause", (Math.random() / 2) + 0.5);
        toggled = false;
        toggleEl.style.backgroundImage = `url("/images/pause.png")`;
    } else {
        pauseTrack();
        sfx.play("pause", (Math.random() / 2) + 0.5);
        toggled = true;
        toggleEl.style.backgroundImage = `url("/images/play.png")`;
    }
}

const resumeTrack = () => {
    if (track !== null) track.play();
}

const pauseTrack = () => {
    if (track !== null) track.pause();
}

const startTrack = (src, name) => {
    if (track !== null) {
        track.pause();
        track.currentTime = 0;
    }

    track = new Howl({ src: src, loop: true });
    track.play();

    const currentTrackEl = document.querySelector("#radio-current-track");
    currentTrackEl.innerHTML = `Currently playing <span style="font-style: italic;">"${name}</span>"`;

    const toggleEl = document.querySelector("#radio-toggle");
    toggleEl.style.backgroundImage = `url("/images/pause.png")`;
    toggleEl.style.cursor = "pointer";
    toggled = false;
}