const fs = require("fs/promises");
const path = require("path");

async function loadJSON(filePath) {
    try {
        const fullPath = path.join(__dirname, "..", "public", filePath);
        const data = await fs.readFile(fullPath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading JSON from ${filePath}:`, error.message);
        throw error;
    }
}

module.exports = loadJSON;