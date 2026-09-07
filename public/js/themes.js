function checkDarkMode() {
    const date = new Date();
    if (date.getHours() < 6 || date.getHours() >= 18) {
        document.documentElement.className = "dark-theme";
    } else {
        document.documentElement.className = "";
    }
    setTimeout(checkDarkMode, 1000);
}
checkDarkMode();