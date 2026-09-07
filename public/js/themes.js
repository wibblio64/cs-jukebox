const isNightTime = () => {
    const date = new Date();
    return date.getHours() < 6 || date.getHours() >= 18;
}

const checkDarkMode = () => {
    document.documentElement.className = isNightTime() ? "dark-theme" : "";
    setTimeout(checkDarkMode, 1000);
}
checkDarkMode();