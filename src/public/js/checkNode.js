window.addEventListener("load", () => {
    const rootEl = document.querySelector("#root");
    if (!isNode()) {
        document.title = "CS Jukebox - Error";
        rootEl.innerHTML = `
            <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: black"></div>
            <div style="font-size: 16px; z-index: 1;">Please use the <span style="font-weight: bold;">app</span>, not the browser.</div>
        `;
    }
});