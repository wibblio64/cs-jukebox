function checkDarkMode() {
    if (isNightTime()) {
        document.documentElement.dataset["theme"] = "dark";
    } else {
        delete document.documentElement.dataset["theme"];
    }
    setTimeout(checkDarkMode, 10);
}
checkDarkMode();