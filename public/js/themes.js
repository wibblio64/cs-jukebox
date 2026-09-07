function isNightTime() {
    const date = new Date();
    return date.getHours() < 6 || date.getHours() >= 18;
}

function checkDarkMode() {
    if (isNightTime()) {
        document.documentElement.dataset["theme"] = "dark";
    } else {
        delete document.documentElement.dataset["theme"];
    }
    setTimeout(checkDarkMode, 1000);
}
checkDarkMode();