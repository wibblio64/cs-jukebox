let toggled = false;

function toggleTrack() {
    const trackEl = document.querySelector("#track-audio");
    if (!trackEl) return;

    const toggleEl = document.querySelector("#track-toggle");
    if (toggled) {
        resumeTrack();
        toggled = false;
        toggleEl.style.backgroundImage = `url("/images/pause.png")`;
    } else {
        pauseTrack();
        toggled = true;
        toggleEl.style.backgroundImage = `url("/images/play.png")`;
    }
}

function resumeTrack() {
    const trackEl = document.querySelector("#track-audio");
    if (trackEl) trackEl.play();
}

function pauseTrack() {
    const trackEl = document.querySelector("#track-audio");
    if (trackEl) trackEl.pause();
}

function startTrack(src, name) {
    const oldTrackEl = document.querySelector("#track-audio");
    if (oldTrackEl) oldTrackEl.remove();

    const trackEl = document.createElement("audio");
    trackEl.src = src;
    trackEl.id = "track-audio";
    trackEl.loop = true;
    trackEl.autoplay = true;
    document.body.append(trackEl);

    const currentTrackEl = document.querySelector("#current-track");
    currentTrackEl.innerHTML = `Currently playing <span style="font-style: italic;">"${name}</span>"`;
    document.title = `Currently playing "${name}"`;

    toggled = false;
    const toggleEl = document.querySelector("#track-toggle");
    toggleEl.style.backgroundImage = `url("/images/pause.png")`;
    toggleEl.style.cursor = "pointer";
}