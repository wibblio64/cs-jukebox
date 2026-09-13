function isNode() {
    if (typeof process !== "undefined" && process.versions != null && process.versions.node != null) {
        return true;
    } else {
        return false;
    }
}

function isNightTime() {
    const date = new Date();
    return date.getHours() < 6 || date.getHours() >= 18;
}