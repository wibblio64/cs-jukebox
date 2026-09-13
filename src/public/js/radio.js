let toggled = false;
let track = null;

function toggleTrack() {
    if (track === null) return;

    const toggleEl = document.querySelector("#radio-toggle");
    if (toggled) {
        sfx.play("pause");
        if (track !== null) track.play();
        toggled = false;
        if (toggleEl) toggleEl.style.backgroundImage = `url("/images/pause.png")`;
    } else {
        sfx.play("pause");
        if (track !== null) track.pause();
        toggled = true;
        if (toggleEl) toggleEl.style.backgroundImage = `url("/images/play.png")`;
    }
}

function startTrack(src, name) {
    if (track !== null) {
        track.pause();
        track.currentTime = 0;
    }

    track = new Audio(src);
    track.loop = true;
    track.play();

    const currentTrackEl = document.querySelector("#radio-current-track");
    currentTrackEl.innerHTML = `Currently playing <span style="font-style: italic;">"${name}</span>"`;

    const toggleEl = document.querySelector("#radio-toggle");
    if (toggleEl) {
        toggleEl.style.backgroundImage = `url("/images/pause.png")`;
        toggleEl.style.cursor = "pointer";
    }

    toggled = false;
}