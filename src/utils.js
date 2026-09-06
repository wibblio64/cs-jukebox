import fs from "fs/promises";
import path from "path";

export async function loadJSON(filePath) {
    try {
        const fullPath = path.join(process.cwd(), "public", filePath);
        const data = await fs.readFile(fullPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading JSON from ${filePath}:`, error.message);
        throw error;
    }
}