let toggled = false;
let track = null;

function toggleTrack() {
    if (track === null) return;
    const toggleEl = document.querySelector("#radio-toggle");
    if (toggled) {
        resumeTrack();
        sfx.play("pause", (Math.random() * 0.25) + 0.875);
        toggled = false;
        toggleEl.style.backgroundImage = `url("/images/pause.png")`;
    } else {
        pauseTrack();
        sfx.play("pause", (Math.random() * 0.25) + 0.875);
        toggled = true;
        toggleEl.style.backgroundImage = `url("/images/play.png")`;
    }
}

function resumeTrack() {
    if (track !== null) track.play();
}

function pauseTrack() {
    if (track !== null) track.pause();
}

function startTrack(src, name) {
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