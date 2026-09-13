import nwbuild from "nw-builder";

const options = {
    srcDir: "./src",
    mode: "build",
    glob: false,
    version: "latest",
    flavor: "sdk"
};

try {
    await nwbuild({
        ...options,
        platform: "win",
        arch: "x64",
        outDir: "./dist/windows",
        app: {
            icon: "./src/icon.ico"
        }
    });
    
    await nwbuild({
        ...options,
        platform: "linux",
        arch: "x64",
        outDir: "./dist/linux"
    });
}
catch (error) {
    console.error(error);
}