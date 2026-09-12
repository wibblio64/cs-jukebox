export const isNightTime = () => {
    const date = new Date();
    return date.getHours() < 6 || date.getHours() >= 18;
}

export async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Could not load JSON file:", error);
    }
}